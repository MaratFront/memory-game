import React, { useEffect, useRef } from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { isModalOpen } from "../../Store/Slices/modalFlag";
const modalRootElement = document.querySelector("#modal");

interface IModal {
  children: React.ReactNode;
}

export default function Modal({ children }: IModal) {
  const dispatch = useDispatch();
  const elementRef = useRef(document.createElement("div"));

  useEffect(() => {
    const element = elementRef.current;
    if (modalRootElement) {
      modalRootElement.appendChild(element);
    }
    return () => {
      if (modalRootElement) {
        modalRootElement.removeChild(element);
      }
    };
  }, []);

  return (
    <div className="modal" onClick={() => dispatch(isModalOpen([false, ""]))}>
      <div className="modal__content">{children}</div>
    </div>
  );
}
