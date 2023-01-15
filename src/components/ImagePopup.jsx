import React from "react";

const ImagePopup = () => {
return(
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
)
}

export default ImagePopup;