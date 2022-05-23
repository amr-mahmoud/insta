import { useState } from "react";
import { ModalProps } from "./model";
import "./style.css";

export const Modal = (props: ModalProps) => {
  const { cancel, submit, title, children, defaultValue } = props;
  const [inputTitle, setInputTitle] = useState(defaultValue);

  return (
    <div className="modal">
      <div className="modal__body">
        <h2>{title}</h2>
        <input
          className="modal__input"
          placeholder={`add ${title} title`}
          autoFocus
          defaultValue={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        {children}
        <div className="modal__buttonWrapper">
          <button
            className="modal__button"
            onClick={() => submit(inputTitle || "New Card")}
          >
            Submit
          </button>
          <button className="modal__button" onClick={() => cancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
