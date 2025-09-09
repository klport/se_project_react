import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, currentUser, isLoggedIn }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : " "
  }`;

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn && (
          <button
            className={itemLikeButtonClassName}
            onClick={handleLike}
          ></button>
        )}
      </div>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;

//Need a "like" button only visable to logged in users
// w/a handleLike function that will call the onCardLike prop
//Logic to check if the current user has already liekd the item
