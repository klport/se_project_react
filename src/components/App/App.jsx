import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, apiKey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherAPI";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";

import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  deleteCardLike,
} from "../../utils/api";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  updateUser,
} from "../../utils/auth";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: " ",
    temp: { F: 999, C: 999 },
    type: " ",
    condition: " ",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState(""); //login-modal opens the modal for testing
  const [selectedCard, setSelectedCard] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    //if F then C; if C then F
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    console.log("card clicked: ", card);
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (itemId) => {
    deleteItem(itemId)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
        closeActiveModal();
      })
      .catch((error) => console.error(error));
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
    setActiveModal("add-garment");
  };

  const handleDeleteButtonClick = () => {
    console.log("Delete button clicked");
    setActiveModal("delete-confirmation");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const openRegisterModal = () => {
    console.log("Register button clicked");
    setActiveModal("register-modal");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    setIsLoading(true);
    return addItem({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const openEditProfileModal = () => {
    setActiveModal("edit-modal");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  // review this useEffect
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    getCurrentUser({ token })
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
      });
  }, []);

  useEffect(() => {
    // is there supposed to be an "api" here?
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeModal]);

  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading(true);

    return registerUser({ name, avatar, email, password })
      .then(() => {
        return loginUser({ email, password });
      })
      .then((userData) => {
        console.log("User logged in after registration:", userData);
        localStorage.setItem("jwt", userData.token);

        closeActiveModal();
      })
      .catch((error) => {
        console.error("Registration error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // LOG IN MODAL -  separate concerns: one function to open the modal, another to submit login credentials.
  const openLoginModal = () => {
    setActiveModal("login-modal");
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);

    return loginUser({ email, password })
      .then((res) => {
        console.log("User logged in:", res);
        localStorage.setItem("jwt", res.token);
        getCurrentUser({ token: res.token }).then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
          closeActiveModal();
        });
      })
      .catch((error) => {
        console.error("Log in error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //LOG OUT

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    console.log("User logged out");
    navigate("/");
  };

  const handleEditProfile = ({ name, avatar }) => {
    setIsLoading(true);
    const token = localStorage.getItem("jwt");

    return updateUser({ token, name, avatar })
      .then((updatedUser) => {
        setCurrentUser(updatedUser); // update React state
        closeActiveModal(); // close modal
      })

      .catch((error) => {
        console.error("Update profile error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    // If not currently liked → add like
    !isLiked
      ? addCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // If currently liked → remove like

        deleteCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              clothingItems={clothingItems}
              onSignUpClick={openRegisterModal}
              onLoginClick={openLoginModal}
            />

            <Routes>
              <Route
                path="/"
                element={
                  // pass clothingItems as a Prop
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleLogout={handleLogout}
                      onEditProfile={openEditProfileModal}
                      currentUser={currentUser}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
            isLoading={isLoading}
          />

          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteCard={handleDeleteCard}
            onDeleteButtonClick={handleDeleteButtonClick}
          />
          <DeleteConfirmationModal
            isOpen={activeModal === "delete-confirmation"}
            onClose={closeActiveModal}
            onConfirm={() => handleDeleteCard(selectedCard._id)}
          />

          <RegisterModal
            isOpen={activeModal === "register-modal"}
            onClose={closeActiveModal}
            onRegister={handleRegister}
            isLoading={isLoading}
            openLoginModal={openLoginModal}
          />

          <LoginModal
            isOpen={activeModal === "login-modal"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
            isLoading={isLoading}
            onSignUpButtonClick={openRegisterModal}
          />

          <EditProfileModal
            isOpen={activeModal === "edit-modal"}
            onClose={closeActiveModal}
            onEditProfile={handleEditProfile}
            isLoading={isLoading}
          />

          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}
export default App;
