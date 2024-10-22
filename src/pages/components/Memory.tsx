import React, { useEffect, useRef, useState } from "react";
import "../components/game.css";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import MemoryTimer from "./MemoryTimer/MemoryTimer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MemoryAttempts from "./MemoryAttempts/MemoryAttempts";
import { resetTimer } from "../../Store/Slices/timer";
import { resetState } from "../../Store/Slices/card";

export default function Memory() {
  const cards = useTypedSelector((state) => state.cards.cards);
  const [score, setScore] = useState<number>(0);
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );
  const indexCardRef = useRef<number[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardValues, setCardValues] = useState<number[]>();
  const arrRef = React.useRef<string[]>([]);
  const [refValues, setRefValues] = useState<any[]>([]); // Новое состояние для значений ref

  const handleCardClick = (index: number, e: any) => {
    setScore(score + 1);
    const newCards = [...flippedCards];
    newCards[index] = true;
    setFlippedCards(newCards);
    indexCardRef.current.push(index);
    setTimeout(() => {
      setCardValues(e.target.textContent);
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
    setScore(0);
    setFlippedCards(Array(cards.length).fill(false));
    setCardValues([]);
    dispatch(resetTimer());
    arrRef.current = []; // Очистка arrRef
    setRefValues([]); // Очистка состояния для перерисовки
  };

  const newGame = () => {
    navigate("/");
    dispatch(resetState());
    dispatch(resetTimer());
    arrRef.current = []; // Очистка arrRef
    setRefValues([]); // Очистка состояния для перерисовки
  };

  useEffect(() => {
    dispatch(resetTimer());
  }, []);

  return (
    <>
      <header className="memory-header">
        <h1 className="memory-header__title">memory</h1>
        <button className="menu-button">menu</button>
        <div className="memory-header__buttons">
          <button className="memory-header__button" onClick={handleRestart}>
            Restart
          </button>
          <button className="memory-header__button" onClick={newGame}>
            New Game
          </button>
        </div>
      </header>
      <div
        className={
          cards.length === 36 ? "memory-section__6x6" : "memory-section"
        }
      >
        {cards.map((item: number, index: number) =>
          flippedCards[index] ? (
            <div
              className="memory-item"
              key={index}
              onClick={(e) => handleCardClick(index, e)}
              style={{
                backgroundColor:
                  refValues[0] === refValues[1] && refValues.length !== 0
                    ? "#FDA214"
                    : "#304859",
              }}
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
        <MemoryTimer />
        <MemoryAttempts attempts={score} />
      </div>
    </>
  );
}
