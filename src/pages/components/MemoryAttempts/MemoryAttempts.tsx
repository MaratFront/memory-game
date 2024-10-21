import React from "react";
import "../MemoryAttempts/attempts.css";
interface IAttempts {
  attempts: number;
}
export default function MemoryAttempts({ attempts }: IAttempts) {
  return (
    <div className="attempts">
      <p className="attempts__title">Moves</p>
      <p className="attempts__value">{attempts}</p>
    </div>
  );
}
