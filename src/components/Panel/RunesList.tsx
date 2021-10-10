import React from "react";

interface RunesListProps {
  list: any[];
}
export default function RunesList({ list }: RunesListProps) {
  console.log(list);
  return (
    <ul>
      {list.map(({ name, src }) => (
        <li key={name}>
          <input type="checkbox" name={name} id={name} />
          <label htmlFor={name}>
            <img src={src} style={{ width: 25 }} />
            {name}
          </label>
        </li>
      ))}
    </ul>
  );
}
