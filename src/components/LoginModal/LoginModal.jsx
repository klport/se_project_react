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
      showSignUpButton={true} // <-- show secondary button
      onSignUpClick={onSignUpButtonClick} // <-- callback for click
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="login email"
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
    </ModalWithForm>
  );
}
