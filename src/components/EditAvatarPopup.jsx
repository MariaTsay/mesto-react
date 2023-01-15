import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
    const {isOpen, onClose} = props;
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            submitBtnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
            className="popup__text popup__text_type_avatar-link"
            id="avatarlink-input"
            type="url"
            name="avatarlink"
            placeholder="Ссылка на аватар"
            required=""
          />
          <span className="popup__error avatarlink-input-error" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;