import React from "react";
import Button from "../../UI/Button";
import useNewGame from "../../utils/newGameUtil";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
interface IModalData {
  handleRestart: () => void;
}
export default function ModalButtons({ handleRestart }: IModalData) {
  const modalType = useTypedSelector((state) => state.modalFlag.modalType);
  const renderButton = (
    text: string,
    className: string,
    onClick?: () => void
  ) => <Button handleClick={onClick} text={text} className={className} />;
  const newGame = useNewGame();
  return (
    <div className="modal__buttons">
      {renderButton("Restart", "modal__restart-game", handleRestart)}
      {renderButton("Setup New Game", "modal__new-game", newGame)}
      {modalType === "menu" && renderButton("Resume", "modal__new-game")}
    </div>
  );
}
