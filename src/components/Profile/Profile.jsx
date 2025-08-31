import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleOpenModal,
  handleLogout,
  onEditProfile,
  currentUser,
}) {
  console.log(
    "Profile received handleLogout:",
    typeof handleLogout,
    handleLogout
  );
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleLogout={handleLogout} onEditProfile={onEditProfile} />
      </section>

      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleOpenModal={handleOpenModal}
          currentUser={currentUser}
        />
      </section>
    </div>
  );
}

export default Profile;
