import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetTimer } from "../../../../Store/Slices/timer";
import { resetState } from "../../../../Store/Slices/settingsCard";
import { resetScore } from "../../../../Store/Slices/playerScore";
import { resetCard } from "../../../../Store/Slices/card";
//mport { resetFlippedCards } from "../../../../Store/Slices/flippedCards";
export default function NewGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newGame = () => {
    dispatch(resetScore(0));
    navigate("/");
    dispatch(resetState());
    dispatch(resetTimer());
    dispatch(resetCard());
  };
  return (
    <button className="memory-header__button" onClick={newGame}>
      New Game
    </button>
  );
}
