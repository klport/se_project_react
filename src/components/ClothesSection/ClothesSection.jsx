import ItemCard from "../ItemCard/ItemCard";
import './ClothesSection.css'

function ClothesSection({ onCardClick, clothingItems, handleOpenModal, handleAddClick }) {
  console.log("handleOpenModal prop:", handleOpenModal); 

  console.log("ClothesSection rendered with clothingItems:", clothingItems);
  return (
    <div className="clothes-section">
      <div className="clothes-section__add-item">
        
        <p>Your items</p>
        <button
        className="header__add-profile-clothes-btn"
          type="submit"
          onClick={() => {
            console.log("Button clicked!");
            handleOpenModal();
          }}
        >
          + Add New 
        </button>
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
        
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems
          // .filter((item) => {
          //  return item.weather === weatherData.type;
          //  })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                // TODO - pass as prop
                onCardClick={onCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
