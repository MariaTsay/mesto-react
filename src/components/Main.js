import React from "react";
import avatar from "../images/profile__avatar.png"

function Main() {
    return(
        <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img
              className="profile__avatar-pic"
              src={avatar}
              alt="Аватар пользователя"
            />
            <button className="profile__avatar-edit-btn" type="button" />
          </div>
          <div className="profile__profile-info">
            <div className="profile__profile-info-container">
              <h1 className="profile__profile-info-title" id="profile-name">
                Жак-Ив Кусто
              </h1>
              <button
                className="profile__profile-info-edit-button"
                type="button"
              />
            </div>
            <p className="profile__profile-info-subtitle" id="profile-job">
              Исследователь океана
            </p>
          </div>
          <button className="profile__add-button" type="button" />
        </section>
        <section className="places">
          <ul className="places__list"></ul>
        </section>
      </main>
    )
}

export default Main;