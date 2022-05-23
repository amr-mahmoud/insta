import styled from "styled-components";

export const ColumnWrapper = styled.div`
  height: 100%;
  width: 180px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px -1px 4px 0px rgba(25, 32, 36, 0.04),
    0 3px 6px 0 rgba(25, 32, 36, 0.16);
  border-radius: 8px;
`;

export const ColumnBody = styled.div`
  display: flex;
  flex: 1;
  background: #dfdddd73;
  flex-direction: column;
  border-radius: 8px;
`;

export const ColumnTitle = styled.label`
  padding: 5px;
  margin-right: auto;
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
