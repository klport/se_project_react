import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleLogout }) {
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
      <img
        className="sidebar__avatar"
        src={currentUser.avatarUrl || "/default-avatar.png"}
        alt="User avatar"
      />
      <div>
        <p className="sidebar__username">{currentUser.name}</p>
        <p className="sidebar__button">Change profile data</p>
        <button
          className="sidebar__button"
          onClick={() => {
            console.log("Button clicked!");
            handleLogout();
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
