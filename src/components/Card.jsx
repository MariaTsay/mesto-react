import React from "react";

const Card = (card) => {

    const handleClick = () => {
        card.onCardClick(card);
    }

    return (
        <li className="places__item">
            <button className="places__delete" type="button"></button>
            <img className="places__image" id="place-link"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <div className="places__text-content">
                <h2 className="places__title" id="place-name">{card.name}</h2>
                <div className="places__like-container">
                    <button className="places__like" type="button"></button>
                    <span className="places__like-counter">{card.likes}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;