import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const { isOpen, onClose, onAddPlace } = props;
  const [cardname, setCardname] = React.useState('');
  const [cardlink, setCardlink] = React.useState('');

  const handleChangeCardname = (e) => {
    setCardname(e.target.value)
  }

  const handleChangeCardlink = (e) => {
    setCardlink(e.target.value)
  }

  //обработчик сабмита
  const handleSubmit = (e) => {
    e.preventDefault();
  
    onAddPlace({
      name: cardname,
      link: cardlink
    });
    e.target.reset();
 }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      submitBtnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        onChange={handleChangeCardname}
      />
      <span className="popup__error placename-input-error" />
      <input
        className="popup__text popup__text_type_place-link"
        id="placelink-input"
        type="url"
        name="cardlink"
        placeholder="Ссылка на картинку"
        required=""
        onChange={handleChangeCardlink}
      />
      <span className="popup__error placelink-input-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;
