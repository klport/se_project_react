import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
//import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
  isLoading,
  // onAddItemModalSub
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    setValues({
      name: " ",
      imageUrl: " ",
      weather: " ",
    });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit(values);
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText={isLoading ? "Saving..." : "Save"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label className="modal__label" htmlFor="imageUrl">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleChange}
          value={values.imageUrl}
        />
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type: </legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            id="hot"
            type="radio"
            name="weather"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          <span className="modal__radio-text">Hot</span>
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            id="warm"
            type="radio"
            name="weather"
            value="warm"
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          <span className="modal__radio-text">Warm</span>
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            id="cold"
            type="radio"
            name="weather"
            value="cold"
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          <span className="modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
