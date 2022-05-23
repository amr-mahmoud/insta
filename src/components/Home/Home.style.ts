import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  border-bottom: 1px solid #d7d7d7;
  min-height: 55px;
  position: relative;
`;

export const Title = styled.label`
  font-weight: bolder;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
