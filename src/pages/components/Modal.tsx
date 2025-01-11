import React, { useEffect, useRef } from "react";
import "./Modal.css";

const modalRootElement = document.querySelector("#modal");

interface IModal {
  children: React.ReactNode;
}

export default function Modal({ children }: IModal) {
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
    <div ref={elementRef} className="modal">
      <div className="modal__content">{children}</div>
    </div>
  );
}
