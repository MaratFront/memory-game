import React from "react";

interface ICards {
  cards: (number | string)[]; // Массив может содержать числа и строки
  flippedCards: boolean[]; // Булевый массив для отображения перевернутых карт
  handleCardClick: (index: number, e: React.MouseEvent<HTMLDivElement>) => void;
  matchedCards: number[]; // Индексы карт, которые совпали
}

export default function MemoryCards({
  cards,
  flippedCards,
  handleCardClick,
  matchedCards,
}: ICards) {
  const [matchedIndexes, setMatchedIndexes] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (
      matchedCards.length !== 0 &&
      matchedCards.length % 2 === 0 &&
      cards[matchedCards[matchedCards.length - 1]] ===
        cards[matchedCards[matchedCards.length - 2]]
    ) {
      const [lastIndex1, lastIndex2] = [
        matchedCards[matchedCards.length - 1],
        matchedCards[matchedCards.length - 2],
      ];
      // Установим через 1 секунду matchedIndexes
      setTimeout(() => {
        setMatchedIndexes((prev) => [...prev, lastIndex1, lastIndex2]);
      }, 1000);
    }
  }, [matchedCards, cards]);

  return (
    <>
      {cards.map((item: number | string, index: number) => (
        <div
          key={index}
          className={
            matchedIndexes.includes(index)
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
