import React from "react";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { add4x4Card, add6x6Card, resetState } from "../../../Store/Slices/card";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
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
  const [activeColorItems, setActiveColorItems] =
    React.useState<string>("Numbers");
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
          <button
            className="button"
            onClick={() => handleActiveColorItems("Numbers")}
            style={{
              backgroundColor: activeColorItems === "Numbers" ? "#304859" : "",
            }}
          >
            Numbers
          </button>
          <button
            className="button"
            onClick={() => handleActiveColorItems("Icons")}
            style={{
              backgroundColor: activeColorItems === "Icons" ? "#304859" : "",
            }}
          >
            Icons
          </button>
        </div>
        <p className="start__text">Numbers of Players</p>
        <div className="start__section start__section--players">
          <button
            className="count__players button"
            onClick={() => handleActiveColorPLayers(1)}
            style={{
              backgroundColor: activeColorPlayers === 1 ? "#304859" : "",
            }}
          >
            1
          </button>
          <button
            className="count__players button"
            onClick={() => handleActiveColorPLayers(2)}
            style={{
              backgroundColor: activeColorPlayers === 2 ? "#304859" : "",
            }}
          >
            2
          </button>
          <button
            className="count__players button"
            onClick={() => handleActiveColorPLayers(3)}
            style={{
              backgroundColor: activeColorPlayers === 3 ? "#304859" : "",
            }}
          >
            3
          </button>
          <button
            className="count__players button"
            onClick={() => handleActiveColorPLayers(4)}
            style={{
              backgroundColor: activeColorPlayers === 4 ? "#304859" : "",
            }}
          >
            4
          </button>
        </div>
        <p className="start__text">Grid Size</p>
        <div className="start__section start__section--grid">
          <button
            className="button"
            onClick={() => handleActiveColorGrid("4x4")}
            style={{
              backgroundColor: activeColorGrid === "4x4" ? "#304859" : "",
            }}
          >
            4x4
          </button>
          <button
            className="button"
            onClick={() => handleActiveColorGrid("6x6")}
            style={{
              backgroundColor: activeColorGrid === "6x6" ? "#304859" : "",
            }}
          >
            6x6
          </button>
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
