import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import "./Profile.css";

function Profile({ onCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>

      <section className="profile__clothting-items">
        <ClothesSection 
        onCardClick={onCardClick} clothingItems={clothingItems} />
      </section>
    </div>
  );
}

export default Profile;
