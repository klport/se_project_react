//import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

export default function EditProfileModal({
  isOpen,
  onClose,
  onEditProfile,
  isLoading,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  console.log(currentUser?.name);
  console.log(isLoggedIn); //
  console.log("Full currentUser object:", currentUser);

  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  // Pre-fill form when modal opens
  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
      console.log("Values being set:", {
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile(values);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        Name *
        <input
          type="text"
          id="name"
          name="name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="modal__label" htmlFor="avatar">
        Avatar *
        <input
          type="url"
          id="avatar"
          name="avatar"
          className="modal__input"
          value={values.avatar || ""}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}
