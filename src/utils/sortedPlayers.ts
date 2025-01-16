import { useTypedSelector } from "../customHooks/TypedUseSelector";
import useMemoryLogic from "./useMemoryLogic";
export default function useSortedPlayers() {
  const playerScore = useTypedSelector((state) => state.playerScore);
  const { players } = useMemoryLogic();
  const sortedPlayers = playerScore
    .slice(0, players) // Берем только первых `players` игроков
    .map((score, index) => ({ index, score }))
    .sort((a, b) => b.score - a.score); // Сортировка по убыванию очковre
  return sortedPlayers;
}
