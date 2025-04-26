import avatar from "../../assets/avatar.png";
import './SideBar.css'

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <div>
        <p className="sidebar__username">User name</p>
        <p className="sidebar__button">Change profile data</p>
        <p className="sidebar__button">Log out</p>
      </div>
    </div>
  );
}

export default SideBar;
