import {
  CardWrapper,
  CardBody,
  CardHeaderWrapper,
  CardIcon,
  CardTitle,
} from "./Card.style";
import { editIcon, deleteIcon } from "../../assets/images";
import { CardProps } from "./model";
import { useState } from "react";
import { EditCardModal } from "../EditCardModal";
import { actionType } from "../../reducer/actions";

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
    <CardWrapper>
      {modalDisplay && (
        <EditCardModal
          cancel={cancelModal}
          title={"Edit Card"}
          submit={submitEdit}
          columnId={columnId}
          cardName={name}
        ></EditCardModal>
      )}
      <CardHeaderWrapper>
        <CardTitle>{name}</CardTitle>
        <CardIcon src={editIcon} onClick={() => setModalDisplay(true)} />
        <CardIcon src={deleteIcon} onClick={() => deleteCard()} />
      </CardHeaderWrapper>
      <CardBody></CardBody>
    </CardWrapper>
  );
};

export default Card;
