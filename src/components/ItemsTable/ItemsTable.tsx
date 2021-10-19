import {
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import useSort from "../../hooks/useSort";
import { AllFiltersTypeSelector } from "../../store/filters/selectors";
import { Order } from "../../types/order";
import { Items, items } from "../../utils/items";
import { ItemFilters } from "./helpers";
import { makeStyles } from "@mui/styles";
import Cell from "./Cell";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
    border: `2px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(2),
  },
  row: {
    border: `2px solid ${theme.palette.primary.main}`,
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
  tableHead: {
    backgroundColor: theme.palette.common.black,
    "& *": {
      color: theme.palette.common.white,
    },
  },
  listStats: {
    padding: "0px !important",
    "& li": {
      padding: 0,
    },
  },
  statsListItem: {
    textTransform: "capitalize",
  },
}));

export enum ItemsTableHeaders {
  name = "name",
  allowedTypeItems = "allowedTypeItems",
  runes = "runes",
  requiedLevel = "reqLvl",
  stats = "stats",
}

const headersIds = Object.values(ItemsTableHeaders);

export default function ItemsTable() {
  const classes = useStyles();
  const intl = useIntl();
  const { runes, itemTypes, sockets } = useSelector(AllFiltersTypeSelector);
  const { list, setConfig, config } = useSort(items);

  const listAfterFilter = useMemo(() => {
    const resultRunes = new ItemFilters(list as Items[]).filterRune(runes);
    const resultItemtypes = new ItemFilters(resultRunes).filterItemType(
      itemTypes
    );
    const endResult = new ItemFilters(resultItemtypes).filterItemSocket(
      sockets
    );
    return endResult;
  }, [runes, sockets, itemTypes, list]);

  const rows = listAfterFilter.map((el) => {
    const allowed = el.allowed.map((itemType: any, index: number) =>
      intl.formatMessage({
        id: `ItemType.${itemType}`,
      })
    );

    const runes = el.runes;
    const name = intl.formatMessage({
      id: `items.${el.name}`,
    });

    const statsList = (
      <List className={classes.listStats}>
        {el.stats.map(({ id, defaultMessage }) => (
          <ListItem key={id} className={classes.statsListItem}>
            {intl.formatMessage({
              id,
              defaultMessage,
            })}
          </ListItem>
        ))}
      </List>
    );

    return { name, allowed, runes, reqLvl: el.reqLvl, statsList };
  });

  const handleSort = (nameField: ItemsTableHeaders) => {
    const newOrdet =
      nameField !== config?.field
        ? Order.asc
        : config.order === Order.asc
        ? Order.desc
        : Order.asc;

    setConfig({
      field: nameField as any,
      order: newOrdet,
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="items table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            {headersIds.map((header) => {
              const text = intl.formatMessage({
                id: `tableHeaders.${header}`,
              });
              const isSortAvable =
                header === ItemsTableHeaders.name ||
                header === ItemsTableHeaders.requiedLevel;

              return (
                <Cell
                  component="th"
                  key={header}
                  handleSort={isSortAvable ? handleSort : undefined}
                  text={text}
                  name={header}
                />
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ name, allowed, reqLvl, statsList, runes }) => (
            <TableRow
              className={classes.row}
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Cell text={name} />
              <Cell text={allowed.join(", ")} />
              <Cell text={runes.join(", ")} />
              <Cell text={reqLvl} />
              <Cell text={statsList} />
            </TableRow>
          ))}
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
