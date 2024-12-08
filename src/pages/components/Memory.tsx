import React, { useEffect, useRef, useState } from "react";
import "../components/game.css";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import MemoryTimer from "./MemoryTimer/MemoryTimer";
import { useDispatch } from "react-redux";
import MemoryAttempts from "./MemoryAttempts/MemoryAttempts";
import { resetTimer } from "../../Store/Slices/timer";
import Header from "./Header/Header";
import { addScore, resetScore } from "../../Store/Slices/playerScore";
import { flippedCard } from "../../Store/Slices/flippedCard";
import MemoryCards from "./MemoryCards/MemoryCards";
export default function Memory() {
  const cards = useTypedSelector((state) => state.cards.cards);
  const score = useTypedSelector((state) => state.playerScore);
  const flippedCardValues = useTypedSelector((state) => state.flippedCard);
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(resetScore(0));
    setFlippedCards(Array(cards.length).fill(false));
    dispatch(resetTimer());
  };
  useEffect(() => {
    dispatch(resetTimer());
  }, []);

  const handleCardClick = (index: number) => {
    // Если карточка уже открыта, ничего не делаем

    // Открываем карточку
    setFlippedCards((prevFlippedCards) =>
      prevFlippedCards.map((isFlipped, i) => (i === index ? true : isFlipped))
    );
    dispatch(flippedCard(cards[index]));
    const lastCard = flippedCardValues.at(-1);
    const firstCard = flippedCardValues.at(-2);
    if (lastCard === firstCard && flippedCardValues.length >= 2) {
      dispatch(addScore(1));
    }
    if (
      lastCard !== firstCard &&
      flippedCardValues.length >= 2 &&
      flippedCardValues.length % 2 === 0
    ) {
      setTimeout(() => {
        setFlippedCards((prevCards) => {
          const updatedCards = [...prevCards];

          const lastFlippedCardIndex = cards.findIndex(
            (card) => card === lastCard
          );
          const firstFlippedCardIndex = cards.findIndex(
            (card) => card === firstCard
          );
          updatedCards[lastFlippedCardIndex] = false;
          updatedCards[firstFlippedCardIndex] = false;
          return updatedCards;
        });
      }, 0);
    }
  };

  return (
    <>
      <Header handleRestart={handleRestart} />
      <div
        className={
          cards.length === 36 ? "memory-section__6x6" : "memory-section"
        }
      >
        <MemoryCards
          cards={cards}
          flippedCards={flippedCards}
          handleCardClick={handleCardClick}
        />
        <MemoryTimer />
        <MemoryAttempts attempts={score[0]} />
      </div>
    </>
  );
}
