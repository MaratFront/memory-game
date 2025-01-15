import React from "react";
import NewGame from "./NewGame/NewGame";
import { useDispatch } from "react-redux";
import { isModalOpen } from "../../../Store/Slices/modalFlag";
import Button from "../../../UI/Button";
interface IStart {
  handleRestart: () => void;
}

export default function Header({ handleRestart }: IStart) {
  const dispatch = useDispatch();
  return (
    <header className="memory-header">
      <h1 className="memory-header__title">memory</h1>
      <Button
        handleClick={() => dispatch(isModalOpen([true, "menu"]))}
        className="menu-button"
        text="menu"
      />
      <div className="memory-header__buttons">
        <Button
          handleClick={handleRestart}
          text="Restart"
          className="memory-header__button"
        />

        <NewGame />
      </div>
    </header>
  );
}
