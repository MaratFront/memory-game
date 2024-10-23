import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetTimer } from "../../../../Store/Slices/timer";
import { resetState } from "../../../../Store/Slices/card";
import { resetScore } from "../../../../Store/Slices/playerScore";

//mport { resetFlippedCards } from "../../../../Store/Slices/flippedCards";
export default function NewGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newGame = () => {
    dispatch(resetScore(0));
    navigate("/");
    dispatch(resetState());
    dispatch(resetTimer());

    //resetFlippedCards([]);
  };
  return (
    <button className="memory-header__button" onClick={newGame}>
      New Game
    </button>
  );
}
