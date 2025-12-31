import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Modal } from "../Modal/Modal";

function ItemModal({
  isOpen,
  onClose,
  card,
  onDeleteCard,
  onDeleteButtonClick,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card?.owner === currentUser?._id;
  console.log(card);
  console.log(currentUser);

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;

  return (
    <Modal name="preview" onClose={onClose} isOpen={isOpen}>
      <img src={card.imageUrl} alt="modal image" className="modal__image" />
      <div className="modal__footer">
        <div className="modal__item-info">
          <h2 className="modal__caption">{card.name}</h2>
          {/* Lost delete button  after I updated code with "isOwn" */}
          {isOwn && (
            <button
              type="button"
              className="modal__delete-button"
              onClick={onDeleteButtonClick}
            >
              Delete Item
            </button>
          )}
        </div>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </Modal>
  );
}
export default ItemModal;
