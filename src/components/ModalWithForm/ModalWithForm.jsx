import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";

function ModalWithForm({
  title,
  buttonText = "Save",
  onClose,
  children,
  isOpen,
  onSubmit,
  showSignUpButton = false,
  onSignUpClick,
  showLogInButton = false,
  onLogInClick,
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <h2 className="modal__title">{title}</h2>

      <form onSubmit={onSubmit} className="modal__form">
        <div className="modal__fields">{children}</div>

        {/* button row */}
        <div className="modal__buttons">
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>

          {showSignUpButton && (
            <button
              type="button"
              className="modal__submit-button_secondary"
              onClick={onSignUpClick}
            >
              Or Sign Up
            </button>
          )}

          {showLogInButton && (
            <button
              type="button"
              className="modal__submit-button_secondary"
              onClick={onLogInClick}
            >
              Or Log In
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}
export default ModalWithForm;
