import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  //if modal is not open, dont render anything//
  if (!isOpen) {
    return null;
  }
  return (
    <div className="delete-modal">
      <div className="delete-modal__content">
        <button type="button" className="modal__close" onClick={onClose}>
          x
        </button>
        <p className="modal__warning">
          Are you sure you want to delete this item? This action is irreversible
        </p>
        <div className="modal__buttons">
          <button
            type="button"
            className="modal__button modal__button-confirm"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>

          <button
            type="button"
            className="modal__button modal__button-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
