import React from "react";
import { isModalOpen } from "../../Store/Slices/modalFlag";
import useMemoryLogic from "../../utils/useMemoryLogic";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
interface IModalHeader {
  title?: string;
  description?: string;
}
export default function ModalHeader({ title, description }: IModalHeader) {
  const modalType = useTypedSelector((state) => state.modalFlag.modalType);
  const playerScore = useTypedSelector((state) => state.playerScore);
  const { players } = useMemoryLogic();
  const sortedPlayers = playerScore
    .slice(0, players) // Берем только первых `players` игроков
    .map((score, index) => ({ index, score }))
    .sort((a, b) => b.score - a.score); // Сортировка по убыванию очков
  const winnerIndex = sortedPlayers[0].index + 1;
  return (
    <>
      {modalType !== "menu" && (
        <h1 className="modal__title">
          {modalType !== "onePlayerWinner" &&
          sortedPlayers[0]?.score !== sortedPlayers[1]?.score
            ? "Player " + winnerIndex + " Wins!"
            : title}
        </h1>
      )}
      {modalType !== "menu" && (
        <p className="modal__description">{description}</p>
      )}
    </>
  );
}
