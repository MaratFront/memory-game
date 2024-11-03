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
    setFlippedCards((prevFlippedCards) =>
      prevFlippedCards.map((isFlipped, i) => (i === index ? true : isFlipped))
    );
    dispatch(flippedCard(cards[index]));
    console.log(flippedCardValues, cards[index]);

    if (
      flippedCardValues[flippedCardValues.length - 1] ===
      flippedCardValues[flippedCardValues.length - 2]
    ) {
      dispatch(addScore(1));
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
