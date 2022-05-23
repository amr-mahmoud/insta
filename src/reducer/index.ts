import { InitialStateType } from "../provider/initState";
import { actions, actionType } from "./actions";
import StorageService from "../services/StorageService";
import { generateID } from "../utils";

const reducer = (state: InitialStateType, action: actions) => {
  switch (action.type) {
    case actionType.SET_COLUMNS: {
      const columns = StorageService.getItem("columns") || [];
      return {
        ...state,
        columns: columns,
      };
    }

    case actionType.ADD_NEW_CARD: {
      const { title, columnId } = action.payload;
      const columns = state.columns.map((column) => {
        const newColumn = { ...column };
        const { id, cards } = newColumn;
        if (id === columnId) cards.push({ id: generateID(), name: title });

        return newColumn;
      });
      StorageService.setItem("columns", columns);
      return {
        ...state,
        columns,
      };
    }

    case actionType.ADD_NEW_COLUMN: {
      const newColumn = { id: generateID(), name: action.payload, cards: [] };
      let columns = state.columns;

      const storedColumns = StorageService.getItem("columns") || [];
      storedColumns.push(newColumn);
      StorageService.setItem("columns", storedColumns);
      columns.push(newColumn);
      return {
        ...state,
        columns,
      };
    }

    case actionType.UPDATE_CARD: {
      const { title, columnId, cardId } = action.payload;
      const columns = state.columns.map((column) => {
        const newColumn = { ...column };
        const { id } = newColumn;

        if (id === columnId) {
          const i = newColumn.cards.findIndex((card) => card.id === cardId);
          if (i !== -1) {
            newColumn.cards[i].name = title;
          } else {
            newColumn.cards.push({ id: cardId, name: title });
          }
        } else {
          newColumn.cards = newColumn.cards.filter(
            (card) => card.id !== cardId
          );
        }

        return newColumn;
      });

      StorageService.setItem("columns", columns);

      return {
        ...state,
        columns,
      };
    }

    case actionType.DELETE_CARD: {
      const { columnId, cardId } = action.payload;

      const columns = state.columns.map((column) => {
        const newColumn = { ...column };
        const { id } = newColumn;

        if (id === columnId) {
          newColumn.cards = newColumn.cards.filter(
            (card) => card.id !== cardId
          );
        }

        return newColumn;
      });

      StorageService.setItem("columns", columns);

      return {
        ...state,
        columns,
      };
    }

    case actionType.UPDATE_COLUMN_NAME: {
      const { name, id: columnId } = action.payload;

      const columns = state.columns.map((column) => {
        const newColumn = { ...column };
        const { id } = newColumn;

        if (id === columnId) {
          newColumn.name = name;
        }

        return newColumn;
      });

      StorageService.setItem("columns", columns);

      return {
        ...state,
        columns,
      };
    }

    case actionType.DELETE_COLUMN: {
      const { id } = action.payload;

      const columns = state.columns.filter((column) => column.id !== id);

      StorageService.setItem("columns", columns);

      return {
        ...state,
        columns,
      };
    }

    default:
      return state;
  }
};

export default reducer;
