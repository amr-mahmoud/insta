import { useCallback, useContext, useState } from "react";
import {
  SelectContainer,
  SelectListWrapper,
  SelectHeader,
  SelectList,
  SelectItem,
  Wrapper,
  SelectTitle,
} from "./Select.style";
import { SelectProps } from "./Select";
import { AppContext } from "../../provider";

const Select = (props: SelectProps) => {
  const [visible, setVisible] = useState(false);

  const { state } = useContext(AppContext);
  const { columns } = state;
  const { title, select, setSelect } = props;

  const onSelectItemClickHandler = (value: string) => {
    setSelect(value);
    setVisible(false);
  };

  const selectedName = useCallback(() => {
    return columns.find((column) => column.id === select)?.name || "";
  }, [select, columns])();

  return (
    <Wrapper>
      <SelectTitle>{title}</SelectTitle>
      <SelectContainer>
        <SelectHeader onClick={() => setVisible(!visible)}>
          {selectedName}
        </SelectHeader>
        {visible && (
          <SelectListWrapper>
            <SelectList>
              {columns.map((item) => (
                <SelectItem
                  key={item.id}
                  onClick={() => onSelectItemClickHandler(item.id)}
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectList>
          </SelectListWrapper>
        )}
      </SelectContainer>
    </Wrapper>
  );
};

export default Select;
