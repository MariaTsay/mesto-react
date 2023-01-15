import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  

  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

 

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
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

    />
    <Footer />
  </div>
  <template className="template-card template-card_type_default" />
  <EditProfilePopup 
  isOpen={isEditProfilePopupOpen}
  onClose={closeAllPopups}
  />
  <AddPlacePopup 
  isOpen={isAddPlacePopupOpen}
  onClose={closeAllPopups}
  />
  <ImagePopup 

  
  />
  <PopupWithForm 
  title="Вы уверены?"
  name="deletecard"
  submitBtnText="Да"
  />
  <EditAvatarPopup 
   isOpen={isEditAvatarPopupOpen}
   onClose={closeAllPopups}
  />
  </div>
</>
  );
}

export default App;
