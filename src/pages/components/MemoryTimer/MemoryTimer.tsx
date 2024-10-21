import React, { useState, useEffect } from "react";
import "../MemoryTimer/timer.css";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
import { tick } from "../../../Store/Slices/timer";
export default function MemoryTimer() {
  const dispatch = useDispatch();
  const { seconds, minutes } = useTypedSelector((state: any) => state.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick()); // Каждую секунду увеличиваем таймер
    }, 1000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [dispatch]);
  return (
    <div className="timer">
      <p className="timer__title">Time</p>
      <p className="timer__value">{`${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`}</p>
    </div>
  );
}
