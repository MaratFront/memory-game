import React from "react";
import "./button.css";
interface IButton extends React.BaseHTMLAttributes<HTMLButtonElement> {
  handleClick: any;
  text: string | number;
  style?: React.CSSProperties;
  className?: string;
}
export default function Button({
  handleClick,
  text,
  style,
  className,
}: IButton) {
  return (
    <button
      className={`button ${className}`}
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
}
