export type ModalProps = {
  cancel: () => voids;
  submit: (input: string) => void;
  title: string;
  children?: ReactElement;
  defaultValue?: string;
};
