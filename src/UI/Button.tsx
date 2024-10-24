import React from "react";
import "./button.css";
interface IButton extends React.BaseHTMLAttributes<HTMLButtonElement> {
  handleClick: (item?: any) => any;
  text: string | number;
  style?: React.CSSProperties;
}
export default function Button({ handleClick, text, style }: IButton) {
  return (
    <button className="button" onClick={handleClick} style={style}>
      {text}
    </button>
  );
}
