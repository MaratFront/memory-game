import React from "react";
import "../MemoryAttempts/attempts.css";
import "../MemoryAttempts/currentPlayer.css";
import IAttempts from "../../../Interfaces/IAttempts";
export default function MemoryAttempts({
  title,
  attempts,
  currentPlayer,
  players,
}: IAttempts) {
  const currentPlayerCondition = currentPlayer === players && title !== "Moves";
  const textColorCondition = currentPlayerCondition ? "white" : "";
  const bgColorCondition = currentPlayerCondition ? "#FDA214" : "";
  const attemptsClassName = title === "Moves" ? "attempts-one" : "attempts";
  return (
    <div className="currrent-player">
      <div
        className={attemptsClassName}
        style={{
          backgroundColor: bgColorCondition,
        }}
      >
        {currentPlayerCondition && <div className="triangle"></div>}
        <p className={"attempts__title"} style={{ color: textColorCondition }}>
          {title}
        </p>
        <p className="attempts__value" style={{ color: textColorCondition }}>
          {attempts}
        </p>
      </div>
      {currentPlayerCondition && (
        <p className="current-player__title">CURRENT TURN</p>
      )}
    </div>
  );
}
