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
  console.log(currentUser?.name); // ✅ works
  console.log(isLoggedIn); // ✅ works

  const { values, handleChange, setValues } = useForm({
    name: "",
    avatarUrl: "",
  });

  // Pre-fill form when modal opens
  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatarUrl: currentUser.avatarUrl || "",
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

      <label className="modal__label" htmlFor="avatarUrl">
        Avatar *
        <input
          type="url"
          id="avatarUrl"
          name="avatarUrl"
          className="modal__input"
          value={values.avatarUrl}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}
