import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
  isLoading,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit(values).then(() => {
      setValues({
        name: "",
        imageUrl: "",
        weather: "",
      });
    });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText={isLoading ? "Adding..." : "Add garment"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="add-item-name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="add-item-name" // unique ID
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={values.name}
        />
      </label>

      <label htmlFor="add-item-imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="add-item-imageUrl" // unique ID
          name="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleChange}
          value={values.imageUrl}
        />
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label
          htmlFor="add-item-hot"
          className="modal__label modal__label_type_radio"
        >
          <input
            className="modal__radio-input"
            id="add-item-hot" // unique ID
            type="radio"
            name="weather"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          <span className="modal__radio-text">Hot</span>
        </label>

        <label
          htmlFor="add-item-warm"
          className="modal__label modal__label_type_radio"
        >
          <input
            className="modal__radio-input"
            id="add-item-warm" // unique ID
            type="radio"
            name="weather"
            value="warm"
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          <span className="modal__radio-text">Warm</span>
        </label>

        <label
          htmlFor="add-item-cold"
          className="modal__label modal__label_type_radio"
        >
          <input
            className="modal__radio-input"
            id="add-item-cold" // unique ID
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
