import useFlippedCards from "../customHooks/useFlippedCards";
import { useState } from "react";
export default function useConditionMatchedCards() {
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const { cards } = useFlippedCards();
  const conditionCardsEffect = (matchedCards: any) => {
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
      setTimeout(() => {
        setMatchedIndexes((prev) => [...prev, lastIndex1, lastIndex2]);
      }, 1000);
    }
  };
  return { matchedIndexes, setMatchedIndexes, conditionCardsEffect };
}
