import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRune } from "../../store/filters/actions";
import { AllRunesSelector } from "../../store/filters/selectors";
import { Rune, RuneItem } from "../../types/rune";

interface RunesListProps {
  list: RuneItem[];
}
export default function RunesList({ list }: RunesListProps) {
  const dispatch = useDispatch();

  const runesStatus = useSelector(AllRunesSelector);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as Rune;
    const value = e.target.checked;
    dispatch(updateRune({ name, value }));
  };
 
  return (
    <ul>
      {list.map(({ name, src }) => (
        <li key={name}>
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={onChange}
            checked={runesStatus[name]}
          />
          <label htmlFor={name}>
            <img src={src} style={{ width: 25 }} alt={name} />
            {name}
          </label>
        </li>
      ))}
    </ul>
  );
}
