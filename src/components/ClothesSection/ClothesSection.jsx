import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button type="submit">+ Add New Clothes</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems
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
