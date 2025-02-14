import React, { useEffect } from "react";
import "../MemoryTimer/timer.css";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../customHooks/TypedUseSelector";
import { tick } from "../../../Store/Slices/timer";
export default function MemoryTimer() {
  const { minutes, seconds } = useTypedSelector((state) => state.timer);
  const { modalType, modalFlag } = useTypedSelector((state) => state.modalFlag);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);
    console.log(modalType);
    if (modalFlag === true && modalType === "onePlayerWinner") {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [dispatch, modalFlag]);
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
