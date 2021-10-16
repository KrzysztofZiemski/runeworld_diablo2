import { List, ListItem } from "@mui/material";
// import React, { useMemo } from "react";
import { useIntl } from "react-intl";
// import { useSelector } from "react-redux";
// import { AllFiltersTypeSelector } from "../../store/filters/selectors";
import { items } from "../../utils/items";
import DataTable from "../DataTable/DataTable";
// import { ItemFilters } from "./helpers";

const headersIds = [
  "name",
  "allowedTypeItems",
  "runes",
  "requiedLevel",
  "stats",
];

export default function ItemsTable() {
  const intl = useIntl();
  // const { runes, itemTypes } = useSelector(AllFiltersTypeSelector);

  const headers = headersIds.map((header) =>
    intl.formatMessage({
      id: `tableHeaders.${header}`,
    })
  );

  // const itemsAfterFilter = useMemo(() => {
  //   const resultRunes = new ItemFilters(items).filterRune(runes);
  //   const resultItemtypes = new ItemFilters(resultRunes).filterItemType(
  //     itemTypes
  //   );
  //   return resultItemtypes;
  // }, [runes, itemTypes]);

  const rows = items.map((el) => {
    const allowed = el.allowed.map(
      (itemType: any, index: number) =>
        `${intl.formatMessage({
          id: `ItemType.${itemType}`,
        })}${index < el.allowed.length - 1 ? ", " : ""}`
    );

    const name = intl.formatMessage({
      id: `items.${el.name}`,
    });

    const statsList = (
      <List>
        {el.stats.map(({ id, defaultMessage }) => (
          <ListItem key={id}>
            {intl.formatMessage({
              id,
              // defaultMessage,
            })}
          </ListItem>
        ))}
      </List>
    );

    return [name, allowed, el.runes.length, el.reqLvl, statsList];
  });

  return <DataTable headers={headers} rows={rows}></DataTable>;
}
