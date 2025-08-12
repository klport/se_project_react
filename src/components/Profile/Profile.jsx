import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleOpenModal,
  handleLogout,
}) {
  console.log(
    "Profile received handleLogout:",
    typeof handleLogout,
    handleLogout
  );
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleLogout={handleLogout} />
      </section>

      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleOpenModal={handleOpenModal}
        />
      </section>
    </div>
  );
}

export default Profile;
