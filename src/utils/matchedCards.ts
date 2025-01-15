import { useState } from "react";
export default function useMatchedCards() {
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  function isMatchedCards(firstCardIndex: number, secondCardIndex: number) {
    setMatchedCards((prevMatchedCards) => [
      ...prevMatchedCards,
      firstCardIndex,
      secondCardIndex,
    ]);
  }
  const resetMatchedCard = () => setMatchedCards([]);
  return { isMatchedCards, matchedCards, resetMatchedCard };
}
