//const cards = useTypedSelector((state) => state.cards.cards);
import {
  addSelectedCard,
  resetSelectedCard,
} from "../..../../Store/Slices/selectedCard";
import { isModalOpen } from "../Store/Slices/modalFlag";
import { addScore, resetScore } from "../.../../Store/Slices/playerScore";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../.../../customHooks/TypedUseSelector";
import { useDispatch } from "react-redux";
import useFlippedCards from "../customHooks/useFlippedCards";
import useMatchedCards from "./matchedCards";
import { resetTimer } from "../Store/Slices/timer";
import useConditionMatchedCards from "./useConditionMatchedCards";
export default function useMemoryLogic() {
  const { cards, flippedCards, updateFlippedCards, resetFlippedCards } =
    useFlippedCards();
  const { matchedCards, resetMatchedCard, isMatchedCards } = useMatchedCards();
  const { matchedIndexes, setMatchedIndexes, conditionCardsEffect } =
    useConditionMatchedCards();
  const players = useTypedSelector((state) => state.settingsCard.countGamers);
  const selectedCards = useTypedSelector(
    (state) => state.selectedCard.selectedCard
  );
  const isModalOpenFlag = useTypedSelector(
    (state) => state.modalFlag.modalFlag
  );
  const { seconds, minutes } = useTypedSelector((state: any) => state.timer);
  const onePlayerScore = useTypedSelector((state) => state.playerScore[0]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const dispatch = useDispatch();
  const playerArr = Array(players).fill(null);
  const onePlayerWinModalData = new Map([
    ["Time Elapsed", `${minutes}:${seconds}`],
    ["Moves Taken", `Moves ${onePlayerScore}`],
  ]);
  const handleRestart = () => {
    setCurrentPlayer(1);
    playerArr.forEach((_, i) => dispatch(resetScore(i)));
    resetFlippedCards();
    resetMatchedCard();
    dispatch(resetSelectedCard());
    dispatch(resetTimer());
    setMatchedIndexes([]);
  };

  useEffect(() => {
    conditionCardsEffect(matchedCards);
  }, [flippedCards]);
  useEffect(() => {
    if (flippedCards.every((card) => card === true)) {
      dispatch(isModalOpen([true, players === 1 ? "onePlayerWinner" : ""]));
    }
  }, [flippedCards, dispatch]);
  const handleCardClick = (index: number) => {
    if (flippedCards[index] || selectedCards.includes(index)) {
      return;
    }
    players === 1 && dispatch(addScore(currentPlayer - 1));
    updateFlippedCards(true, index);
    dispatch(addSelectedCard(index));
    if (selectedCards.length === 1) {
      const firstCardIndex: any = selectedCards[0];
      const secondCardIndex = index;
      if (cards[firstCardIndex] === cards[secondCardIndex]) {
        players > 1 && dispatch(addScore(currentPlayer - 1));
        isMatchedCards(firstCardIndex, secondCardIndex);
      } else {
        playerArr.length > currentPlayer
          ? setCurrentPlayer(currentPlayer + 1)
          : setCurrentPlayer(1);

        setTimeout(() => {
          updateFlippedCards(false, firstCardIndex, secondCardIndex);
        }, 1000);
      }
      dispatch(resetSelectedCard());
    }
  };
  return {
    isModalOpenFlag,
    handleRestart,
    cards,
    flippedCards,
    handleCardClick,
    matchedCards,
    matchedIndexes,
    players,
    playerArr,
    currentPlayer,
    onePlayerWinModalData,
  };
}
