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
      buttonText={isLoading ? "Logging in..." : "Log in"} // what do i change this to ?Logging in... : Logged in
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Your email"
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
      {/* <button type="submit" className="modal__submit">
        Log in
      </button> */}
      {/* <button
        type="button"
        className="modal__submit"
        onClick={onSignUpButtonClick}
      >
        Sign up
      </button> */}
    </ModalWithForm>
  );
}
