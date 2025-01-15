import React from "react";
import useNewGame from "../../../../utils/newGameUtil";
import Button from "../../../../UI/Button";
export default function NewGame() {
  const newGame = useNewGame();
  return <Button handleClick={newGame} text="new Game" />;
}
