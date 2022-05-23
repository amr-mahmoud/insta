import React, { useEffect, useContext, useState } from "react";
import {
  ContentWrapper,
  ContentHeader,
  AddColumnButton,
  ColumnsListWrapper,
} from "./Content.style";
import { AppContext } from "../../provider";
import { actionType } from "../../reducer/actions";
import Column from "../Column";
import { Modal } from "../Modal";

const Content: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [addModalDisplay, setAddModalDisplay] = useState(false);

  useEffect(() => {
    dispatch({ type: actionType.SET_COLUMNS });
  }, []);

  const { columns } = state || {};

  const addColumnHeaderHander = () => {
    setAddModalDisplay(true);
  };

  const cancelModal = () => {
    setAddModalDisplay(false);
  };
  const submitNewColumn = (input: string) => {
    dispatch({ type: actionType.ADD_NEW_COLUMN, payload: input });
    setAddModalDisplay(false);
  };
  return (
    <ContentWrapper>
      {addModalDisplay && (
        <Modal
          cancel={cancelModal}
          submit={(input) => submitNewColumn(input)}
          title={"Add Column"}
        />
      )}
      <ContentHeader>
        <AddColumnButton onClick={() => addColumnHeaderHander()}>
          Add Column
        </AddColumnButton>
      </ContentHeader>
      <ColumnsListWrapper>
        {columns &&
          columns.map((column) => (
            <Column key={column.id} column={column} dispatch={dispatch} />
          ))}
      </ColumnsListWrapper>
    </ContentWrapper>
  );
};

export default Content;
