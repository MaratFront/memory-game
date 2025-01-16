import React, { useState, useEffect } from "react";
import "../MemoryTimer/timer.css";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
import { tick } from "../../../Store/Slices/timer";
export default function MemoryTimer() {
  const dispatch = useDispatch();
  const { seconds, minutes } = useTypedSelector((state: any) => state.timer);
  const modalType = useTypedSelector((state) => state.modalFlag.modalType);
  const modalFlag = useTypedSelector((state) => state.modalFlag.modalFlag);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick()); // Каждую секунду увеличиваем таймер
    }, 1000);
    modalType !== "menu" && modalFlag && clearInterval(interval);

    return () => clearInterval(interval);
  }, [dispatch, modalType]);
  return (
    <div className="timer">
      <p className="timer__title">Time</p>
      <p className="timer__value">{`${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(1, "0")}`}</p>
    </div>
  );
}
