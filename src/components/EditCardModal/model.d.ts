export type EditModalProps = {
  cancel: () => voids;
  submit: (input: string, columnId: string) => void;
  title: string;
  columnId: string;
  cardName: string;
};
