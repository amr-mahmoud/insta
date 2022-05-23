import { editIcon, deleteIcon } from "../../assets/images";
import { CardProps } from "./model";
import { useState } from "react";
import { EditCardModal } from "../EditCardModal";
import { actionType } from "../../reducer/actions";
import "./style.css";
const Card = (props: CardProps) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const { dispatch, card, columnId } = props;

  const { name, id } = card;

  const submitEdit = (input: string, select: string) => {
    dispatch({
      type: actionType.UPDATE_CARD,
      payload: {
        cardId: id,
        title: input,
        columnId: select,
      },
    });

    setModalDisplay(false);
  };

  const cancelModal = () => {
    setModalDisplay(false);
  };

  const deleteCard = () => {
    dispatch({
      type: actionType.DELETE_CARD,
      payload: {
        cardId: id,
        columnId: columnId,
      },
    });
  };
  return (
    <div className="card">
      {modalDisplay && (
        <EditCardModal
          cancel={cancelModal}
          title={"Edit Card"}
          submit={submitEdit}
          columnId={columnId}
          cardName={name}
        ></EditCardModal>
      )}
      <div className="card__header">
        <label className="card__title">{name}</label>
        <img
          alt=""
          className="card__icon"
          src={editIcon}
          onClick={() => setModalDisplay(true)}
        />
        <img
          alt=""
          className="card__icon"
          src={deleteIcon}
          onClick={() => deleteCard()}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Card;
