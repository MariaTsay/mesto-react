import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
    const {isOpen, onClose} = props;
    return (
        <PopupWithForm
            title="Новое место"
            name="add-place"
            submitBtnText="Создать"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
            className="popup__text popup__text_type_place-name"
            id="placename-input"
            type="text"
            name="cardname"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="popup__error placename-input-error" />
          <input
            className="popup__text popup__text_type_place-link"
            id="placelink-input"
            type="url"
            name="cardlink"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__error placelink-input-error" />
        </PopupWithForm>
    )
}

export default AddPlacePopup;