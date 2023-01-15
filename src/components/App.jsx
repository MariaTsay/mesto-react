import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true)
    setSelectedCard(card)
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false)
  }

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <template className="template-card template-card_type_default" />
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          submitBtnText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
        <PopupWithForm
          title="Новое место"
          name="add-place"
          submitBtnText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title="Вы уверены?"
          name="deletecard"
          submitBtnText="Да"
        />
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          submitBtnText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
      </div>
    </>
  );
}

export default App;