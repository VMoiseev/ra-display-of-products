import React from 'react';
import ShopCard from './ShopCard';

function CardsView({ cards }) {
  return (
    <div className="cardsView">
      {cards.map((card, index) => (
        <ShopCard card={card} key={card.name + index}/>
      ))}
    </div>
  )
}

export default CardsView;