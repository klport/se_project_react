import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleLogout }) {
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
      {currentUser.avatarUrl ? (
        <img
          className="sidebar__avatar"
          src={currentUser.avatarUrl || "/default-avatar.png"}
          alt="User avatar"
        />
      ) : (
        <div className="sidebar__avatar-placeholder">
          {currentUser.name.slice(0, 1).toUpperCase}
        </div>
      )}
      <div>
        <p className="sidebar__username">{currentUser.name}</p>
        <button className="sidebar__button" onClick={open}>
          Change profile data
        </button>
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
