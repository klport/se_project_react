import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import "./Profile.css";

function Profile({ onCardClick, clothingItems, handleOpenModal }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>

      <section className="profile__clothting-items">
        <ClothesSection 
        onCardClick={onCardClick} clothingItems={clothingItems} 
        handleOpenModal={handleOpenModal}/>
      </section>
    </div>
  );
}

export default Profile;
