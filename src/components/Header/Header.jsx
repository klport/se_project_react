import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import menuIcon from "../../assets/menuIcon.svg";
import modalClose from "../../assets/modalClose.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ handleAddClick, weatherData, onSignUpClick, onLoginClick }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__desktop-container">
        <Link to="/">
          <img className="header__logo" alt="WTWR logo" src={logo} />
        </Link>

        <div className="header__container">
          <p className="header__date-and-location">
            {currentDate}, {weatherData.city}
          </p>
        </div>

        <button className="header__menu-button" onClick={toggleMobileMenu}>
          <img
            src={isMobileMenuOpened ? modalClose : menuIcon}
            alt={isMobileMenuOpened ? "Close menu" : "Open menu"}
          />
        </button>

        <nav
          className={`header__navigation ${
            isMobileMenuOpened ? "header__navigation--active" : ""
          }`}
        >
          <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
          {isLoggedIn ? (
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                {currentUser.avatarUrl ? (
                  <img
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    className="header__avatar"
                  />
                ) : (
                  <span>K {currentUser.name}</span>
                )}
                {/* 1st letter of user name, make it CAPS */}
              </div>
            </Link>
          ) : (
            <div>
              <button onClick={onSignUpClick}>Sign up </button>
              <button onClick={onLoginClick}> Log in</button>
            </div>
          )}
        </nav>
      </div>
      <div className="header__container header__container_mobile">
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
    </header>
  );
}

export default Header;
