export enum actionType {
  ADD_NEW_COLUMN = "ADD_NEW_COLUMN",
  ADD_NEW_CARD = "ADD_NEW_CARD",
  UPDATE_CARD = "UPDATE_CARD",
  DELETE_CARD = "DELETE_CARD",
  SET_COLUMNS = "SET_COLUMNS",
  UPDATE_COLUMN_NAME = "UPDATE_COLUMN_NAME",
  DELETE_COLUMN = "DELETE_COLUMN",
}

export interface deleteColumn {
  type: actionType.DELETE_COLUMN;
  payload: { id: string };
}
export interface deleteCard {
  type: actionType.DELETE_CARD;
  payload: { cardId: string; columnId: string };
}

export interface updateColumn {
  type: actionType.UPDATE_COLUMN_NAME;
  payload: { name: string; id: string };
}

export interface updateCard {
  type: actionType.UPDATE_CARD;
  payload: { cardId: string; title: string; columnId: string };
}

export interface getColumns {
  type: actionType.SET_COLUMNS;
}

export interface addNewColumn {
  type: actionType.ADD_NEW_COLUMN;
  payload: string;
}

export interface addNewCard {
  type: actionType.ADD_NEW_CARD;
  payload: { title: string; columnId: string };
}

export type actions =
  | deleteColumn
  | updateColumn
  | deleteCard
  | updateCard
  | getColumns
  | addNewColumn
  | addNewCard;
