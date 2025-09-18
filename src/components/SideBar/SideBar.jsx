import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleLogout, onEditProfile }) {
  console.log(
    "SideBar received handleLogout:",
    typeof handleLogout,
    handleLogout
  );
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    return (
      <div className="sidebar">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="sidebar">
      {currentUser.avatar ? (
        <img
          className="sidebar__avatar"
          src={currentUser.avatar || "/default-avatar.png"}
          alt="User avatar"
        />
      ) : (
        <div className="sidebar__avatar-placeholder">
          {currentUser.name.slice(0, 1).toUpperCase()}
        </div>
      )}
      <div>
        <p className="sidebar__username">{currentUser.name}</p>
        <div className="sidebar__buttons">
          <button className="sidebar__button" onClick={onEditProfile}>
            Change profile data
          </button>
          <button
            className="sidebar__button"
            onClick={() => {
              handleLogout();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
