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
  const dispatch = useDispatch();
  const handleStartGame = () => {
    const cardGenerators: any = {
      Icons: {
        "6x6": randomArrEmoji6x6,
        "4x4": randomArrEmoji4x4,
      },
      Numbers: {
        "6x6": randomArr6x6,
        "4x4": randomArr4x4,
      },
    };

    const generator =
      cardGenerators[cardsSettings.theme]?.[cardsSettings.gridSize];

    if (generator) {
      dispatch(addCard(generator()));
    }
  };
  const sectionArr = [
    {
      titles: ["Select Theme", "Number of Players", "Grid Size"],
      selectData: [
        ["Numbers", "Icons"],
        [1, 2, 3, 4],
        ["4x4", "6x6"],
      ],
      actions: [addCardTheme, addCardGamers, addCardGrid],
    },
  ];

  return (
    <div className="start">
      <p className="title">memory</p>
      <div className="start__menu">
        {sectionArr.map(({ titles, selectData, actions }) =>
          titles.map((title, index) => {
            return (
              <StartSection
                title={title}
                arrButtons={selectData[index]}
                action={actions[index]}
              />
            );
          })
        )}
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
