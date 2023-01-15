import React, { useEffect } from "react";
import { api } from "../utils/api"
import Card from "./Card";

function Main(props) {

  const {onEditProfile, onAddPlace, onEditAvatar} = props;
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const getInfo = async () => {
    try {
      const userInfo = await api.getUserInfo();
      setUserName(userInfo.name);
      setUserAvatar(userInfo.avatar);
      setUserDescription(userInfo.about);
    } catch(err) {
      console.log(err)
    }
  }

  const getCards = async () => {
    try {
      await api.getInitialCards().then(res => {
        setCards(res);
      })
      
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getInfo();
    getCards();
  }, [])
  
  return(
        <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img
              className="profile__avatar-pic"
              src={userAvatar}
              alt="Аватар пользователя"
            />
            <button className="profile__avatar-edit-btn" type="button" onClick={onEditAvatar} />
          </div>
          <div className="profile__profile-info">
            <div className="profile__profile-info-container">
              <h1 className="profile__profile-info-title" id="profile-name">
                {userName}
              </h1>
              <button
                className="profile__profile-info-edit-button"
                type="button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__profile-info-subtitle" id="profile-job">
              {userDescription}
            </p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}/>
        </section>
        <section className="places">
          <ul className="places__list">
          {cards.map((card) => (
           <Card key={card._id} card={card}  />
          ))}
          </ul>
        </section>
      </main>
    )
}

export default Main;