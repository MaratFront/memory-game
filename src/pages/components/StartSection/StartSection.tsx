import React from "react";
import Button from "../../../UI/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UnknownAction } from "@reduxjs/toolkit";
interface ISection {
  title: string;
  arrButtons: string[] | number[];
  action: (item: string | number) => UnknownAction;
}
export default function StartSection({ title, arrButtons, action }: ISection) {
  const [activeButtons, setActiveButtons] = useState<string | number>();
  const dispatch = useDispatch();
  const handleActiveColorItems = (item: string | number) => {
    setActiveButtons(item);
    dispatch(action(item));
  };

  return (
    <>
      <p className="start__text">{title}</p>
      <div className="start__section start__section--theme">
        {arrButtons.map((item: string | number) => (
          <Button
            handleClick={() => handleActiveColorItems(item)}
            text={item}
            style={{
              backgroundColor: activeButtons === item ? "#304859" : "",
            }}
          />
        ))}
      </div>
    </>
  );
}
