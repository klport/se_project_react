import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import "./Profile.css";

function Profile({
  onCardClick,
  onCardLike,
  clothingItems,
  handleAddClick,
  handleLogout,
  onEditProfile,
  currentUser,
  isLoggedIn,
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
          onCardLike={onCardLike}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}

export default Profile;
