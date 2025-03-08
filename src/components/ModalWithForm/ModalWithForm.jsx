import "./ModalWithForm.css";

function ModalWithForm({ 
  title, 
  buttonText = "Save", 
  onClose, 
  children,
  isOpen,
  onSubmit
  }) {
  return (
    <div 
    className={`modal ${isOpen && "modal_opened"}`}
    >
      {/* if active modal === the string "add-garment", then apply the class of modal_opened*/}
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close" />
        <h2 className="modal__title">{title}</h2>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
