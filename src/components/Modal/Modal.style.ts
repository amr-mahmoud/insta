import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  position: absolute;
  background: #00000042;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  display: flex;
`;

export const ModalBody = styled.div`
  padding: 30px;
  background: white;
  width: 300px;
  height: 200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const CancelButton = styled.button`
  width: 60px;
  height: 30px;
  margin: auto;
`;

export const SubmitButton = styled.button`
  width: 60px;
  height: 30px;
  margin: auto;
`;

export const ModalButtonsWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

export const ModalInput = styled.input`
  height: 35px;
  padding: 5px;
`;

export const ModalTitle = styled.h2``;
