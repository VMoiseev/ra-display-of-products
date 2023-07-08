import React from 'react';

function ShopCard({ card }) {
  return (
    <div className="shopCard">
      <div className="shopCard__name">{(card.name).toUpperCase()}</div>
      <div className="shopCard__color">{card.color}</div>
      <img className="shopCard__img" src={card.img} alt={card.name}></img>
      <div className="shopCard__footer">
        <div className="shopCard__price">${card.price}</div>
        <button className="shopCard__button btn">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopCard;