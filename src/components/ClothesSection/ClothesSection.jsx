import ItemCard from "../ItemCard/ItemCard";
import './ClothesSection.css'

function ClothesSection({ onCardClick, clothingItems, handleOpenModal }) {
  console.log("ClothesSection rendered with clothingItems:", clothingItems);
  return (
    <div className="clothes-section">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button type="submit" onClick={handleOpenModal}>+ Add New Clothes</button>
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
