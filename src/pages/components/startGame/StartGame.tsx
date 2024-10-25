import React from "react";
import "./style.css";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
import {
  addCardTheme,
  addCardGamers,
  addCardGrid,
} from "../../../Store/Slices/settingsCard";
import Button from "../../../UI/Button";
import StartSection from "../StartSection/StartSection";
import { useDispatch } from "react-redux";
import { addCard } from "../../../Store/Slices/card";
import {
  randomArrEmoji4x4,
  randomArrEmoji6x6,
  randomArr4x4,
  randomArr6x6,
} from "../../../utils/generateData";
import { Link } from "react-router-dom";
export default function StartGame() {
  const cardsSettings = useTypedSelector((state) => state.settingsCard);
  const cards = useTypedSelector((state) => state.cards.cards);
  console.log(cards);
  const dispatch = useDispatch();
  const handleStartGame = () => {
    if (cardsSettings.theme === "Icons" && cardsSettings.gridSize === "6x6") {
      dispatch(addCard(randomArrEmoji6x6()));
    } else if (
      cardsSettings.theme === "Icons" &&
      cardsSettings.gridSize === "4x4"
    ) {
      dispatch(addCard(randomArrEmoji4x4()));
    } else if (
      cardsSettings.theme === "Numbers" &&
      cardsSettings.gridSize === "6x6"
    ) {
      dispatch(addCard(randomArr6x6()));
    } else {
      dispatch(addCard(randomArr4x4()));
    }
  };
  return (
    <div className="start">
      <p className="title">memory</p>
      <div className="start__menu">
        <StartSection
          title="Select Theme"
          arrButtons={["Numbers", "Icons"]}
          action={addCardTheme}
        />
        <StartSection
          title="Numbers of Players"
          arrButtons={[1, 2, 3, 4]}
          action={addCardGamers}
        />
        <StartSection
          title="Select Theme"
          arrButtons={["4x4", "6x6"]}
          action={addCardGrid}
        />
        <Link to="/game">
          <Button
            className="start__game"
            handleClick={handleStartGame}
            text="Start Game"
          />
        </Link>
      </div>
    </div>
  );
}
