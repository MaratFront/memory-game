import React from "react";
import MemoryAttempts from "./MemoryAttempts/MemoryAttempts";
import MemoryTimer from "./MemoryTimer/MemoryTimer";
import { useTypedSelector } from "../../customHooks/TypedUseSelector";
interface ICurrentPlayer {
  currentPlayer: number;
}
export default function Players({ currentPlayer }: ICurrentPlayer) {
  const players = useTypedSelector((state) => state.settingsCard.countGamers);
  const score = useTypedSelector((state) => state.playerScore);
  return (
    <div className="players">
      {players === 1 && <MemoryTimer />}
      {players > 1 &&
        Array(players)
          .fill(null)
          .map((_, index) => (
            <MemoryAttempts
              title={`Player ${index + 1}`}
              attempts={score[index]}
              currentPlayer={currentPlayer}
              players={index + 1}
            />
          ))}
      {players === 1 && <MemoryAttempts title="Moves" attempts={score[0]} />}
    </div>
  );
}
