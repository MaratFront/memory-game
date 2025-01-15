import React from "react";

interface ICards {
  cards: (number | string)[]; // Массив может содержать числа и строки
  flippedCards: boolean[]; // Булевый массив для отображения перевернутых карт
  handleCardClick: (index: number, e: React.MouseEvent<HTMLDivElement>) => void;
  matchedCards: number[]; // Индексы карт, которые совпали
  matchedIndexes: number[];
}

export default function MemoryCards({
  cards,
  flippedCards,
  handleCardClick,
  matchedCards,
  matchedIndexes,
}: ICards) {
  return (
    <>
      {cards.map((item: number | string, index: number) => (
        <div
          key={index}
          className={
            matchedIndexes.includes(index) && matchedCards.length !== 0
              ? "memory-item__grey"
              : flippedCards[index]
              ? "memory-item"
              : "memory-item memory-item__active"
          }
          onClick={(e) => handleCardClick(index, e)}
        >
          {flippedCards[index] ? item : null}
        </div>
      ))}
    </>
  );
}
