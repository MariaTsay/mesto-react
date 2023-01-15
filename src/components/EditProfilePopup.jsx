import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => {
    const {isOpen, onClose} = props;
    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            submitBtnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                className="popup__text popup__text_type_name"
                id="profilename-input"
                type="text"
                name="name"
                required=""
                minLength={2}
                maxLength={40}
                placeholder="Имя профиля"
            />
            <span className="popup__error profilename-input-error" />
            <input
                className="popup__text popup__text_type_about"
                id="profilejob-input"
                type="text"
                name="job"
                required=""
                minLength={2}
                maxLength={200}
                placeholder="Описание профиля"

            />
            <span className="popup__error profilejob-input-error" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;