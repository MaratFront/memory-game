import React, { useState } from "react";
import "../components/game.css";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import ICard from "../../Store/interfaces/card";

export default function Memory() {
  const cards = useTypedSelector((state) => state.cards.cards);

  // Состояние для отслеживания переворота каждой карточки
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );

  // Функция для обработки клика по карточке
  const handleCardClick = (index: number) => {
    const newCards = [...flippedCards];
    newCards[index] = true;
    setFlippedCards(newCards);
  };

  return (
    <>
      <header className="memory-header">
        <h1 className="memory-header__title">memory</h1>
        <button className="memory-header__button">menu</button>
      </header>
      <div
        className={
          cards.length === 36 ? "memory-section__6x6" : "memory-section"
        }
      >
        {cards.map((item: string | number, index: number) =>
          flippedCards[index] ? (
            <div
              className="memory-item"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              {item}
            </div>
          ) : (
            <div
              className="memory-item memory-item__active"
              key={index}
              onClick={() => handleCardClick(index)}
            ></div>
          )
        )}
      </div>
    </>
  );
}
