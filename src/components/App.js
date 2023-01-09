import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <>
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
  <template className="template-card template-card_type_default" />
  <section className="popup popup_type_edit">
    <div className="popup__container">
      <div className="popup__content">
        <button className="popup__close" type="button" id="edit-close" />
        <form
          className="popup__form"
          name="edit-profile"
          id="edit-form"
          noValidate=""
        >
          <h2 className="popup__title">Редактировать профиль</h2>
          <input
            className="popup__text popup__text_type_name"
            id="profilename-input"
            type="text"
            name="name"
            required=""
            minLength={2}
            maxLength={40}
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
          />
          <span className="popup__error profilejob-input-error" />
          <button className="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </section>
  <section className="popup popup_type_add">
    <div className="popup__container">
      <div className="popup__content">
        <button className="popup__close" type="button" id="add-close" />
        <form
          className="popup__form"
          name="add-place"
          id="add-form"
          noValidate=""
        >
          <h2 className="popup__title">Новое место</h2>
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
          <button className="popup__submit-btn" type="submit">
            Создать
          </button>
        </form>
      </div>
    </div>
  </section>
  <section className="popup popup_type_photo">
    <div className="popup__container">
      <div className="popup__content">
        <button className="popup__close" type="button" />
        <figure className="popup__fullscreen-form">
          <img
            className="popup__fullscreen-image"
            src="https://i.pinimg.com/736x/49/81/06/498106c4713ad630d18e3885ca397bca.jpg"
            alt="о.Кайо Сомбреро, Венесуэла"
          />
          <figcaption className="popup__description">
            о.Кайо Сомбреро, Венесуэла
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section className="popup popup_type_delete">
    <div className="popup__container">
      <div className="popup__content">
        <button className="popup__close" type="button" id="deletecard-close" />
        <form
          className="popup__form"
          name="deletecard"
          id="deletecard-form"
          noValidate=""
        >
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__submit-btn" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>
  </section>
  <section className="popup popup_type_avatar">
    <div className="popup__container">
      <div className="popup__content">
        <button className="popup__close" type="button" id="avatar-close" />
        <form
          className="popup__form"
          name="avatar"
          id="avatar-form"
          noValidate=""
        >
          <h2 className="popup__title">Обновить аватар</h2>
          <input
            className="popup__text popup__text_type_avatar-link"
            id="avatarlink-input"
            type="url"
            name="avatarlink"
            placeholder="Ссылка на аватар"
            required=""
          />
          <span className="popup__error avatarlink-input-error" />
          <button className="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </section>
</>
  );
}

export default App;
