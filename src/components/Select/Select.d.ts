export interface SelectProps {
  columnId: string;
  title: string;
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}
