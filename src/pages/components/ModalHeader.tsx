import React from "react";
import useSortedPlayers from "../../utils/sortedPlayers";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import IModalHeader from "../../Interfaces/IModalHeader";
export default function ModalHeader({ title, description }: IModalHeader) {
  const modalType = useTypedSelector((state) => state.modalFlag.modalType);
  const sortedPlayers = useSortedPlayers();
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
