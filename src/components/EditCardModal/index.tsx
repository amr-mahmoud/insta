import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import Select from "../Select";
import { EditModalProps } from "./model";

export const EditCardModal = (props: EditModalProps) => {
  const { cancel, columnId, submit, title, cardName } = props;
  const [select, setSelect] = useState("");

  useEffect(() => {
    setSelect(columnId);
  }, [columnId]);

  const submitHandler = (input: string) => {
    submit(input, select);
  };

  return (
    <Modal
      defaultValue={cardName}
      cancel={cancel}
      submit={submitHandler}
      title={title}
    >
      <Select
        select={select}
        setSelect={setSelect}
        columnId={columnId}
        title={"Select Column"}
      />
    </Modal>
  );
};
