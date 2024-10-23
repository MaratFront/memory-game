import React from "react";
import NewGame from "./NewGame/NewGame";
interface IStart {
  handleRestart: () => void;
}

export default function Header({ handleRestart }: IStart) {
  return (
    <header className="memory-header">
      <h1 className="memory-header__title">memory</h1>
      <button className="menu-button">menu</button>
      <div className="memory-header__buttons">
        <button className="memory-header__button" onClick={handleRestart}>
          Restart
        </button>
        <NewGame />
      </div>
    </header>
  );
}
