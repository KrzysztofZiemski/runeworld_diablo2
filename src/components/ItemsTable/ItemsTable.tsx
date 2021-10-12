import React from "react";
import { useIntl } from "react-intl";
import { items } from "../../utils/items";

export default function ItemsTable() {
  const intl = useIntl();

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
          <td>
            {intl.formatMessage({
              id: name,
            })}
          </td>
          <td>
            {allowed.map(
              (itemType, index) =>
                `${intl.formatMessage({
                  id: `ItemType.${itemType}`,
                })}${index < allowed.length - 1 ? ", " : ""}`
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
              {stats.map(({ id, defaultMessage, value }) => (
                <li>
                  {intl.formatMessage(
                    {
                      id,
                      defaultMessage,
                    },
                    { value }
                  )}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </table>
  );
}
