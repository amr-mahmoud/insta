import { useCallback, useContext, useState } from "react";
import { SelectProps } from "./Select";
import { AppContext } from "../../provider";
import "./style.css";

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
    <div className="select">
      <label className="select__title">{title}</label>
      <div className="select__container">
        <div className="select__header" onClick={() => setVisible(!visible)}>
          {selectedName}
        </div>
        {visible && (
          <div className="select__wrapper">
            <ul className="select__list">
              {columns.map((item) => (
                <li
                  className="select__item"
                  key={item.id}
                  onClick={() => onSelectItemClickHandler(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
