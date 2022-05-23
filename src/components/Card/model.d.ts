import { ReactElement } from "react";
import { Card } from "../../provider/initState";

export type CardProps = {
  card: Card;
  dispatch: React.Dispatch<actions>;
  columnId: string;

};
