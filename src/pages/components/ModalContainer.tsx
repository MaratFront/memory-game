import React from "react";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
import useSortedPlayers from "../../utils/sortedPlayers";
interface IModalData {
  content?: Map<string, string | number>;
}
export default function ModalContainer({ content }: IModalData) {
  const modalType = useTypedSelector((state) => state.modalFlag.modalType);
  const players = useTypedSelector((state) => state.settingsCard.countGamers);
  const sortedPlayers = useSortedPlayers();
  const winnerScore = sortedPlayers[0].score;
  return (
    <>
      {modalType !== "menu" && players === 1 && content ? (
        <div className="modal__container">
          {Array.from(content.entries()).map(([key, value]) => (
            <div className="modal__item" key={key}>
              <p className="modal__item--key">{key}</p>
              <p className="modal__item--value">{value}</p>
            </div>
          ))}
        </div>
      ) : (
        modalType !== "menu" && (
          <div className="modal__container">
            {sortedPlayers.map((player) => (
              <div
                className={
                  player.score === winnerScore
                    ? "modal__item--active"
                    : "modal__item"
                }
                key={player.index}
              >
                <p className="modal__item--key">
                  {`Player ${player.index + 1}`}
                  {player.score === winnerScore && " (Winner!)"}
                </p>
                <p className="modal__item--value">{`${player.score} Pairs`}</p>
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
}
