import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

export default function LoginModal({
  onClose,
  isOpen,
  onLogin, //on register??
  isLoading,
  onSignUpButtonClick,
}) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values).then(() => {
      setValues({
        email: "",
        password: "",
      });
    });
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText={isLoading ? "Logging In..." : "Log In"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      extraButton={
        <button
          type="button"
          className="modal__submit-button modal__submit-button_secondary"
          onClick={onSignUpButtonClick}
        >
          Sign up
        </button>
      }
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <div className="login_modal-buttons"></div>
    </ModalWithForm>
  );
}
