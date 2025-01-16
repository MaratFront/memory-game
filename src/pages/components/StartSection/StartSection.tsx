import React, { useEffect } from "react";
import Button from "../../../UI/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ISection from "../../../Interfaces/ISection";
export default function StartSection({ title, arrButtons, action }: ISection) {
  const [activeButtons, setActiveButtons] = useState<string | number>();

  const dispatch = useDispatch();
  const handleActiveColorItems = (item: string | number) => {
    setActiveButtons(item);
    dispatch(action(item));
  };
  useEffect(() => {
    Object.values(arrButtons)
      .reverse()
      .forEach((item) => {
        setActiveButtons(item);
      });
  }, []);
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
