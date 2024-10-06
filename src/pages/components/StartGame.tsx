import React from "react";
import "./style.css";
import { useState } from "react";
export default function StartGame() {
  return (
    <div className="start">
      <p className="title">memory</p>
      <div className="start__menu">
        <p className="start__text">Select Theme</p>
        <div className="start__section start__section--theme">
          <button className="button">Numbers</button>
          <button className="button">Icons</button>
        </div>
        <p className="start__text">Numbers of Players</p>
        <div className="start__section start__section--players">
          <button className="count__players button">1</button>
          <button className="count__players button">2</button>
          <button className="count__players button">3</button>
          <button className="count__players button">4</button>
        </div>
        <p className="start__text">Grid Size</p>
        <div className="start__section start__section--grid">
          <button className="button">4x4</button>
          <button className="button">6x6</button>
        </div>
        <button className="start__game">Start Game</button>
      </div>
    </div>
  );
}
