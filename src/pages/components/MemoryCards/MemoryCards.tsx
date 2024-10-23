import React from "react";

interface ICards {
  cards: (number | string)[]; // Массив может содержать числа и строки
  flippedCards: number[];
  handleCardClick: (index: number, e: any) => void;
}

export default function MemoryCards({
  cards,
  flippedCards,
  handleCardClick,
}: ICards) {
  return (
    <>
      {cards.map((item: number | string, index: number) =>
        flippedCards[index] ? (
          <div
            className="memory-item"
            key={index}
            onClick={(e) => handleCardClick(index, e)}
          >
            {item}
          </div>
        ) : (
          <div
            className="memory-item memory-item__active"
            key={index}
            onClick={(e) => handleCardClick(index, e)}
          ></div>
        )
      )}
    </>
  );
}
