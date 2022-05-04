import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  Paper,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useIntl } from "react-intl";
import { SortConfig } from "../../hooks/useSort";
import { FilterFields } from "../../types/filter";
import { Order } from "../../types/order";
import { Row } from "./ItemsBody";

//@ts-ignore
const useStyles = makeStyles((theme: Theme) => ({
  filter: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    margin: `0 ${theme.spacing(1)} !important`,
    padding: `${theme.spacing(1)} !important`,
  },
  filterButtonContainer: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-evenly",
  },
  filterButton: {
    flexShink: 0,
    whiteSpace: "nowrap",
  },
  list: {
    padding: `${theme.spacing(1)} !important`,
    "& li": {
      backgroundColor: `${theme.palette.grey} !important`,
    },
  },
  listItem: {
    display: "flex",
    margin: `${theme.spacing(1)} 0px !important`,
    alignItems: "stretch !important",
  },
  marked: {
    // border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.secondary.light,
  },
  markedText: {
    marginTop: "auto",
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
  },
  listItemInfo: {
    width: "30%",
    minWidth: 100,
    maxWidth: "300",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    "& p": {
      margin: `4px 0px`,
    },
  },
  listItemName: {
    textTransform: "uppercase",
    fontWeight: "700 !important",
    marginBottom: `${theme.spacing(2)} !important`,
    color: theme.palette.primary.main,
    fontStyle: "italic",
  },
  statsList: {
    fontSize: 12,
  },
  statListItem: {
    margin: 0,
    padding: "3px 0 !important",
  },
}));

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
  const FilterByNameText = intl.formatMessage({
    id: `tableHeaders.${FilterFields.name}`,
  });
  const FilterByNameLvlText = intl.formatMessage({
    id: `tableHeaders.${FilterFields.reqLvl}`,
  });

  return (
    <>
      <Card className={classes.filter} elevation={3}>
        <Typography>
          {intl.formatMessage({
            id: "other.filter",
            defaultMessage: "Filter",
          })}
          :{" "}
        </Typography>
        <Grid className={classes.filterButtonContainer}>
          <Button
            className={classes.filterButton}
            variant={
              config?.field === FilterFields.name ? "contained" : "outlined"
            }
            onClick={() => handleSort(FilterFields.name)}
          >
            {FilterByNameText}
          </Button>
          <Button
            className={classes.filterButton}
            variant={
              config?.field === FilterFields.reqLvl ? "contained" : "outlined"
            }
            onClick={() => handleSort(FilterFields.reqLvl)}
          >
            {FilterByNameLvlText}
          </Button>
        </Grid>
      </Card>
      <List className={classes.list}>
        {rows.map(
          (
            { name, allowed, reqLvl, stats, runes, sockets, markedText },
            index
          ) => {
            return (
              <ListItem
                key={name + index}
                className={
                  markedText
                    ? `${classes.listItem} ${classes.marked}`
                    : classes.listItem
                }
                elevation={3}
                component={Paper}
              >
                <div className={classes.listItemInfo}>
                  <Typography className={classes.listItemName}>
                    {name}
                  </Typography>
                  <Typography sx={{ color: "#fe7405", fontWeight: 700 }}>
                    {runes}
                  </Typography>
                  <Typography>{`${allowed} (${sockets})`}</Typography>
                  <Typography>{reqLvl}</Typography>
                  {markedText && (
                    <Typography
                      className={classes.markedText}
                      style={{ marginTop: "auto" }}
                    >
                      {markedText}
                    </Typography>
                  )}
                </div>
                <List sx={{ overflow: "auto" }}>
                  {stats.map((stat, index) => {
                    return (
                      <ListItem className={classes.statListItem} key={index}>
                        {stat}
                      </ListItem>
                    );
                  })}
                </List>
              </ListItem>
            );
          }
        )}
      </List>
    </>
  );
}
