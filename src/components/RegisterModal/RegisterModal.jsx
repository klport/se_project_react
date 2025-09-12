import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

export default function RegisterModal({
  onClose,
  isOpen,
  onRegister,
  isLoading,
  openLoginModal,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatarUrl: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values before submission:", values); // are the values being passed?

    onRegister(values).then(() => {
      setValues({
        name: "",
        avatarUrl: "",
        email: "",
        password: "",
      });
    });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText={isLoading ? "Registering..." : "Sign up"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      showLogInButton={true}
      onLogInClick={openLoginModal}
    >
      <label htmlFor="name" className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          id="avatarUrl"
          name="avatarUrl"
          placeholder="Link to your avatar"
          required
          value={values.avatarUrl}
          onChange={handleChange}
        />
      </label>

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
    </ModalWithForm>
  );
}
