import { ColumnType } from "../../provider/initState";

export type ColumnProps = {
  column: ColumnType;
  dispatch: React.Dispatch<actions>;
};
