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
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useIntl } from "react-intl";
import { SortConfig } from "../../hooks/useSort";
import { FilterFields } from "../../types/filter";
import { Order } from "../../types/order";
import Cell from "./Cell";
import { Row } from "./ItemsBody";

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
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
  markedColor: {
    background: `${theme.palette.secondary.light} !important`,
  },
  markedText: {
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
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

const headersIds = [
  FilterFields.name,
  "allowedTypeItems",
  "runes",
  FilterFields.reqLvl,
  "stats",
];

export default function ItemsTableDesktop({
  rows,
  setConfig,
  config,
}: {
  rows: Row[];
  setConfig: (config: SortConfig) => void;
  config: SortConfig;
}) {
  const classes = useStyles();
  const intl = useIntl();

  const handleSort = (nameField: string) => {
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
                header === FilterFields.name || header === FilterFields.reqLvl;

              return (
                <Cell
                  component="th"
                  key={header}
                  handleSort={isSortAvable ? handleSort : undefined}
                  text={text}
                  name={header as FilterFields}
                />
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({ name, allowed, reqLvl, stats, runes, markedText }, index) => {
              const statsList = (
                <List className={classes.listStats}>
                  {stats.map((stat: string, index: number) => (
                    <ListItem
                      key={stat + index}
                      className={classes.statsListItem}
                    >
                      {stat}
                    </ListItem>
                  ))}
                </List>
              );
              return (
                <TableRow
                  className={
                    markedText
                      ? `${classes.row} ${classes.markedColor}`
                      : classes.row
                  }
                  key={name + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Cell
                    text={name}
                    note={
                      markedText ? (
                        <Typography className={classes.markedText}>
                          {`(${markedText})`}
                        </Typography>
                      ) : undefined
                    }
                  />
                  <Cell text={allowed} />
                  <Cell text={runes} />
                  <Cell text={reqLvl} />
                  <Cell text={statsList} />
                </TableRow>
              );
            }
          )}
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
