import { List, ListItem } from "@mui/material";
import React from "react";
import { useIntl } from "react-intl";
import { items } from "../../utils/items";
import DataTable from "../DataTable/DataTable";

const headersIds = [
  "name",
  "allowedTypeItems",
  "runes",
  "requiedLevel",
  "stats",
];

export default function ItemsTable() {
  const intl = useIntl();

  const headers = headersIds.map((header) =>
    intl.formatMessage({
      id: `tableHeaders.${header}`,
    })
  );

  const rows = items.map((el) => {
    const allowed = el.allowed.map(
      (itemType, index) =>
        `${intl.formatMessage({
          id: `ItemType.${itemType}`,
        })}${index < el.allowed.length - 1 ? ", " : ""}`
    );

    const statsList = (
      <List>
        {el.stats.map(({ id, defaultMessage, value }) => (
          <ListItem>
            {intl.formatMessage(
              {
                id,
                defaultMessage,
              },
              { value }
            )}
          </ListItem>
        ))}
      </List>
    );

    return [el.name, allowed, el.runes.length, el.reqLvl, statsList];
  });

  return <DataTable headers={headers} rows={rows}></DataTable>;
}
