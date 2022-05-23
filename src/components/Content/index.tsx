import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../provider";
import { actionType } from "../../reducer/actions";
import Column from "../Column";
import { Modal } from "../Modal";
import "./style.css";

const Content: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [addModalDisplay, setAddModalDisplay] = useState(false);

  useEffect(() => {
    dispatch({ type: actionType.SET_COLUMNS });
  }, [dispatch]);

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
    <main className="content">
      {addModalDisplay && (
        <Modal
          cancel={cancelModal}
          submit={(input) => submitNewColumn(input)}
          title={"Add Column"}
        />
      )}
      <div className="content_header">
        <button
          className="content__button--add"
          onClick={() => addColumnHeaderHander()}
        >
          Add Column
        </button>
      </div>
      <div className="column__list">
        {columns &&
          columns.map((column) => (
            <Column key={column.id} column={column} dispatch={dispatch} />
          ))}
      </div>
    </main>
  );
};

export default Content;
