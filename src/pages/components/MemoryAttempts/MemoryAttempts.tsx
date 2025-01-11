import React from "react";
import "../MemoryAttempts/attempts.css";
interface IAttempts {
  title: string;
  attempts: number;
  currentPlayer?: number;
  players?: number;
}
export default function MemoryAttempts({
  title,
  attempts,
  currentPlayer,
  players,
}: IAttempts) {
  console.log(currentPlayer, attempts);
  return (
    <div className="currrent-player">
      <div className={title === "Moves" ? "attempts-one" : "attempts"}>
        <p className={"attempts__title"}>{title}</p>
        <p className="attempts__value">{attempts}</p>
      </div>
      {currentPlayer === players && title !== "Moves" && (
        <p className="current-player__title">currentPlayer</p>
      )}
    </div>
  );
}
