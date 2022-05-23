import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px -1px 4px 0px rgba(25, 32, 36, 0.04),
    0 3px 6px 0 rgba(25, 32, 36, 0.16);
  border-radius: 8px;
  width: 160px;
  height: 100px;
  margin: 4px auto;
  background: #ffffffe3;
`;

export const CardTitle = styled.label`
  margin-right: auto;
`;

export const CardIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CardBody = styled.div``;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
