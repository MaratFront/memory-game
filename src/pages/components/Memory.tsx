import React, { useEffect, useState } from "react";
import "../components/game.css";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import { useDispatch, useSelector } from "react-redux";
import { resetTimer } from "../../Store/Slices/timer";
import Header from "./Header/Header";
import { addScore, resetScore } from "../../Store/Slices/playerScore";
import MemoryCards from "./MemoryCards/MemoryCards";
import Players from "./Players";
import {
  addSelectedCard,
  resetSelectedCard,
} from "../../Store/Slices/selectedCard";
import { isModalOpen } from "../../Store/Slices/modalFlag";
import Modal from "./Modal";
import ModalData from "./ModalData";
export default function Memory() {
  const cards = useTypedSelector((state) => state.cards.cards);
  const players = useTypedSelector((state) => state.settingsCard.countGamers);
  const selectedCards = useTypedSelector(
    (state) => state.selectedCard.selectedCard
  );
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const isModalOpenFlag = useTypedSelector(
    (state) => state.modalFlag.modalFlag
  );
  const { seconds, minutes } = useTypedSelector((state: any) => state.timer);
  const onePlayerScore = useTypedSelector((state) => state.playerScore[0]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const flippedCardFlag = useTypedSelector(
    (state) => state.flippedCard.cardFlag
  );
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );
  const dispatch = useDispatch();
  const playerArr = Array(players).fill(null);
  const onePlayerWinModalData = new Map([
    ["Time Elapsed", `${minutes}:${seconds}`],
    ["Moves Taken", `Moves ${onePlayerScore}`],
  ]);
  const handleRestart = () => {
    setCurrentPlayer(1);
    playerArr.forEach((_, i) => dispatch(resetScore(i)));
    setFlippedCards(Array(cards.length).fill(false));
    dispatch(resetSelectedCard());
    dispatch(resetTimer());
    //dispatch(isModalOpen(false));
  };

  useEffect(() => {
    dispatch(resetTimer());
  }, []);
  useEffect(() => {
    if (flippedCards.every((card) => card === true)) {
      dispatch(isModalOpen(true));
    }
  }, [flippedCards, dispatch]);
  const handleCardClick = (index: number, e: any) => {
    // Проверяем, если карточка уже перевернута
    if (flippedCards[index] || selectedCards.includes(index)) {
      return;
    }
    // Переворачиваем карточку при клике
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[index] = true;
      return newFlippedCards;
    });
    dispatch(addSelectedCard(index));
    if (selectedCards.length === 1) {
      const firstCardIndex: any = selectedCards[0];
      const secondCardIndex = index;
      if (cards[firstCardIndex] === cards[secondCardIndex]) {
        dispatch(addScore(currentPlayer - 1));
        setMatchedCards((prevMatchedCards) => [
          ...prevMatchedCards,
          firstCardIndex,
          secondCardIndex,
        ]);
      } else {
        playerArr.length > currentPlayer
          ? setCurrentPlayer(currentPlayer + 1)
          : setCurrentPlayer(1);

        setTimeout(() => {
          setFlippedCards((prevFlippedCards) => {
            const newFlippedCards = [...prevFlippedCards];
            newFlippedCards[firstCardIndex] = false;
            newFlippedCards[secondCardIndex] = false;
            return newFlippedCards;
          });
        }, 1000);
      }
      dispatch(resetSelectedCard());
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
          matchedCards={matchedCards}
        />
      </div>
      <Players currentPlayer={currentPlayer} />
      {isModalOpenFlag && (
        <Modal>
          <ModalData
            title="You did it!"
            description="Game over! Here’s how you got on…"
            content={onePlayerWinModalData}
            handleRestart={handleRestart}
          />
        </Modal>
      )}
    </>
  );
}
