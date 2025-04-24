import "./ItemModal.css";


function ItemModal({
  activeModal,
  onClose,
  card,
  onDeleteCard,
  onDeleteButtonClick,
}) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__preview-content">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.imageUrl} alt="modal image" className="modal__image" />
        <div className="modal__footer">
          <div className="modal__item-info">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              type="button"
              className="modal__delete-button"
              onClick={onDeleteButtonClick}
            >
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
