import { useState } from "react";
import { useTypedSelector } from "./TypedUseSelector";
function useFlippedCards() {
  const cards = useTypedSelector((state) => state.cards.cards);
  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );
  function updateFlippedCards(
    flippedCardFlag?: boolean,
    firstCardIndex?: number,
    secondCardIndex?: number
  ) {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      firstCardIndex !== undefined &&
        (newFlippedCards[firstCardIndex] = flippedCardFlag);
      secondCardIndex !== undefined &&
        (newFlippedCards[secondCardIndex] = flippedCardFlag);
      return newFlippedCards;
    });
  }
  function resetFlippedCards() {
    setFlippedCards(Array(cards.length).fill(false));
  }

  return { flippedCards, cards, updateFlippedCards, resetFlippedCards };
}
export default useFlippedCards;
