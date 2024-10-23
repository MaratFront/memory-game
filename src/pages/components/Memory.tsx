import React, { useEffect, useRef, useState } from "react";
import "../components/game.css";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import MemoryTimer from "./MemoryTimer/MemoryTimer";
import { useDispatch } from "react-redux";
import MemoryAttempts from "./MemoryAttempts/MemoryAttempts";
import { resetTimer } from "../../Store/Slices/timer";
import Header from "./Header/Header";
import { addScore, resetScore } from "../../Store/Slices/playerScore";
import MemoryCards from "./MemoryCards/MemoryCards";
export default function Memory() {
  const cards = useTypedSelector((state) => state.cards.cards);
  const score = useTypedSelector((state) => state.playerScore);
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );
  const indexCardRef = useRef<number[]>([]);
  const dispatch = useDispatch();
  const arrRef = React.useRef<string[]>([]);
  const refItem = React.useRef<any>(null);
  const [refValues, setRefValues] = useState<string[]>([]); // Новое состояние для значений ref

  const handleCardClick = (index: number, e: any) => {
    dispatch(addScore(0));
    const newCards = [...flippedCards];
    newCards[index] = true;
    setFlippedCards(newCards);
    indexCardRef.current.push(index);
    setTimeout(() => {
      arrRef.current.push(e.target.textContent);
      setRefValues([...arrRef.current]);
      if (
        arrRef.current[0] === arrRef.current[1] &&
        arrRef.current.length === 2
      ) {
        arrRef.current = [];
        setRefValues([]);
      } else if (arrRef.current.length === 2) {
        setTimeout(() => {
          arrRef.current = [];
          newCards[indexCardRef.current[indexCardRef.current.length - 1]] =
            false;
          newCards[indexCardRef.current[indexCardRef.current.length - 2]] =
            false;

          setRefValues([]);
        }, 1000);
      }
      console.log(arrRef);
    }, 0);
  };
  const handleRestart = () => {
    dispatch(resetScore(0));
    setFlippedCards(Array(cards.length).fill(false));
    dispatch(resetTimer());
    arrRef.current = []; // Очистка arrRef
    setRefValues([]); // Очистка состояния для перерисовки
  };
  useEffect(() => {
    dispatch(resetTimer());
  }, []);

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
