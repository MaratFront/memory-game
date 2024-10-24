import React from "react";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { add4x4Card, add6x6Card, resetState } from "../../../Store/Slices/card";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
import Button from "../../../UI/Button";
import {
  randomArr4x4,
  randomArrEmoji6x6,
  randomArrEmoji4x4,
  randomArr6x6,
} from "../../../utils/generateData";
import { useDispatch } from "react-redux";
export default function StartGame() {
  const [activeColorPlayers, setActiveColorPLayers] = useState<number>(1);
  const [activeColorGrid, setActiveColorGrid] = useState<string>("4x4");
  const [activeColorItems, setActiveColorItems] = useState<string>("Numbers");
  const dataArr = useTypedSelector((state) => state.cards.cards);

  const dispatch = useDispatch();
  const handleActiveColorPLayers = (index: number) =>
    setActiveColorPLayers(index);
  const handleActiveColorGrid = (size: string) => {
    setActiveColorGrid(size);
  };
  const handleActiveColorItems = (item: string) => setActiveColorItems(item);
  function handleStartGame() {
    if (activeColorItems === "Numbers") {
      if (activeColorGrid === "4x4") {
        dispatch(add4x4Card(randomArr4x4()));
      } else {
        dispatch(resetState());
        if (activeColorGrid === "6x6") {
          dispatch(add6x6Card(randomArr6x6()));
        }
      }
    }
    if (activeColorItems === "Icons") {
      dispatch(resetState());
      if (activeColorGrid === "4x4" && dataArr.length === 0) {
        dispatch(add4x4Card(randomArrEmoji4x4()));
      }
      if (activeColorGrid === "6x6") {
        dispatch(resetState());
        dispatch(add6x6Card(randomArrEmoji6x6()));
      }
    }
  }

  return (
    <div className="start">
      <p className="title">memory</p>
      <div className="start__menu">
        <p className="start__text">Select Theme</p>
        <div className="start__section start__section--theme">
          {["Numbers", "Icons"].map((item: string) => (
            <Button
              handleClick={() => handleActiveColorItems(item)}
              text={item}
              style={{
                backgroundColor: activeColorItems === item ? "#304859" : "",
              }}
            />
          ))}
        </div>
        <p className="start__text">Numbers of Players</p>
        <div className="start__section start__section--players">
          {[1, 2, 3, 4].map((countPlayers) => (
            <Button
              handleClick={() => handleActiveColorPLayers(countPlayers)}
              text={countPlayers}
              style={{
                backgroundColor:
                  activeColorPlayers === countPlayers ? "#304859" : "",
              }}
            />
          ))}
        </div>
        <p className="start__text">Grid Size</p>
        <div className="start__section start__section--grid">
          {["4x4", "6x6"].map((grid: string) => (
            <Button
              style={{
                backgroundColor: activeColorGrid === grid ? "#304859" : "",
              }}
              text={grid}
              handleClick={() => handleActiveColorGrid(grid)}
            />
          ))}
        </div>
        <Link to="/game">
          <button className="start__game" onClick={handleStartGame}>
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
}
