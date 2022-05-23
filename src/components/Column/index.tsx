import {
  ColumnBody,
  ColumnWrapper,
  ColumnTitle,
  ColumnHeader,
  ColumnIcon,
} from "./Column.style";
import { addIcon, deleteIcon, editIcon } from "../../assets/images";
import { Modal } from "../Modal";
import { useState } from "react";
import { ColumnProps } from "./model";
import { actionType } from "../../reducer/actions";
import Card from "../Card";

const Column = (props: ColumnProps) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [editModalDisplay, setEditModalDisplay] = useState(false);

  const { dispatch, column } = props;
  const { name, cards, id } = column;

  const cancelModal = () => {
    setModalDisplay(false);
  };

  const cancelEditModal = () => {
    setEditModalDisplay(false);
  };

  const submitAddCard = (input: string) => {
    dispatch({
      type: actionType.ADD_NEW_CARD,
      payload: { title: input, columnId: id },
    });
    setModalDisplay(false);
  };

  const submitEditModalCard = (input: string) => {
    dispatch({
      type: actionType.UPDATE_COLUMN_NAME,
      payload: { name: input, id: column.id },
    });
    setEditModalDisplay(false);
  };

  const handleDeleteColumn = () => {
    dispatch({ type: actionType.DELETE_COLUMN, payload: { id: column.id } });
  };

  return (
    <ColumnWrapper>
      {modalDisplay && (
        <Modal cancel={cancelModal} title={"Add Card"} submit={submitAddCard} />
      )}
      {editModalDisplay && (
        <Modal
          cancel={cancelEditModal}
          title={"Edit  column"}
          submit={submitEditModalCard}
          defaultValue={column.name}
        />
      )}
      <ColumnHeader>
        <ColumnTitle>{name}</ColumnTitle>
        <ColumnIcon src={deleteIcon} onClick={() => handleDeleteColumn()} />
        <ColumnIcon src={addIcon} onClick={() => setModalDisplay(true)} />
        <ColumnIcon src={editIcon} onClick={() => setEditModalDisplay(true)} />
      </ColumnHeader>
      <ColumnBody>
        {cards?.length > 0 &&
          cards.map((card) => (
            <Card key={card.id} dispatch={dispatch} card={card} columnId={id} />
          ))}
      </ColumnBody>
    </ColumnWrapper>
  );
};

export default Column;
