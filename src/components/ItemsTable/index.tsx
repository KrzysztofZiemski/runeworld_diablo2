import React from "react";
import { items } from "../../assests/items";

export default function ItemsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Przedmiot</th>
          <th>Ilość soketów</th>
          <th>Runy</th>
          <th>Wymagany poziom</th>
          <th>Statystyki</th>
        </tr>
      </thead>
      {items.map(({ name, allowed, runes, reqLvl, stats }) => (
        <tr>
          <td>{name}</td>
          <td>
            {allowed.map(
              (itemType, index) =>
                `${itemType} ${index + 1 < allowed.length ? " + " : ""}`
            )}
          </td>
          <td>{runes.length}</td>
          <td>
            {runes.map(
              (rune, index) => `${rune} ${index < runes.length ? "+" : ""}`
            )}
          </td>
          <td>{runes.length}</td>
          <td>{reqLvl}</td>
          <td>
            <ul>
              {stats.map((stat) => (
                <li>{stat}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </table>
  );
}
