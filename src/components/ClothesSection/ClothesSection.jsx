import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({
  onCardClick,
  onCardLike,
  clothingItems,
  handleAddClick,
  isLoggedIn,
  currentUser,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__add-item">
        <p>Your items</p>
        <button
          className="header__add-profile-clothes-btn"
          type="submit"
          onClick={() => {
            handleAddClick();
          }}
        >
          + Add New
        </button>
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        ></button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems
          .filter((item) => item.owner === currentUser._id) //only keep items owned by the current user
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                isLoggedIn={isLoggedIn}
                onCardLike={onCardLike}
                currentUser={currentUser}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
