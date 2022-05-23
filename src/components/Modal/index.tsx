import { useState } from "react";
import {
  ModalWrapper,
  ModalBody,
  ModalTitle,
  ModalInput,
  ModalButtonsWrapper,
  SubmitButton,
  CancelButton,
} from "./Modal.style";
import { ModalProps } from "./model";

export const Modal = (props: ModalProps) => {
  const { cancel, submit, title, children, defaultValue } = props;
  const [inputTitle, setInputTitle] = useState(defaultValue);

  return (
    <ModalWrapper>
      <ModalBody>
        <ModalTitle>{title}</ModalTitle>
        <ModalInput
          placeholder={`add ${title} title`}
          autoFocus
          defaultValue={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        {children}
        <ModalButtonsWrapper>
          <SubmitButton onClick={() => submit(inputTitle || "New Card")}>
            Submit
          </SubmitButton>
          <CancelButton onClick={() => cancel()}>Cancel</CancelButton>
        </ModalButtonsWrapper>
      </ModalBody>
    </ModalWrapper>
  );
};
