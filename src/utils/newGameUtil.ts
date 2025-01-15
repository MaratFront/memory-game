import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetTimer } from "../Store/Slices/timer";
import { resetState } from "../Store/Slices/settingsCard";
import { resetScore } from "../Store/Slices/playerScore";
import { resetCard } from "../Store/Slices/card";
import useMemoryLogic from "./useMemoryLogic";
export default function useNewGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { playerArr } = useMemoryLogic();

  return () => {
    playerArr.forEach((_, i) => dispatch(resetScore(i)));
    dispatch(resetScore(0));
    navigate("/");
    dispatch(resetState());
    dispatch(resetTimer());
    dispatch(resetCard());
  };
}
