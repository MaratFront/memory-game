import React from "react";
import { addScore } from "../../../Store/Slices/playerScore";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
interface IPlayerScore {
  userCount: number;
  score: number;
}
export default function PlayerScore({ userCount, score }: IPlayerScore) {
  return (
    <div className="player-score">
      <p className="player-score__user">Player {userCount}</p>
      <p className="player-score__score">{score}</p>
    </div>
  );
}
