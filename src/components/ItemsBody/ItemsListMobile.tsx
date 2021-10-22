import {
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SortConfig } from "../../hooks/useSort";
import { Order } from "../../types/order";
import { Row } from "./ItemsBody";

//@ts-ignore
const useStyles = makeStyles((theme: Theme) => ({
  list: {
    padding: `${theme.spacing(2)} !important`,
    "& li": {
      backgroundColor: `${theme.palette.grey} !important`,
    },
  },
  listItem: {
    display: "flex",
    margin: `${theme.spacing(1)} 0px !important`,
    alignItems: "stretch !important",
  },
  listItemInfo: {
    width: "30%",
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
    <>
      <Grid>
        <Typography>Sortuj:</Typography>
        <Button onClick={() => handleSort("name")}>Nazwa</Button>
        <Button onClick={() => handleSort("reqLvl")}>Lewel</Button>
      </Grid>
      <List className={classes.list}>
        {rows.map(({ name, allowed, reqLvl, stats, runes, sockets }, index) => {
          return (
            <ListItem
              key={name + index}
              className={classes.listItem}
              elevation={3}
              component={Paper}
            >
              <div className={classes.listItemInfo}>
                <Typography className={classes.listItemName}>{name}</Typography>
                <Typography sx={{ color: "orange" }}>{runes}</Typography>
                <Typography>{`${allowed} (${sockets})`}</Typography>
                <Typography>{reqLvl}</Typography>
              </div>
              <List>
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
        })}
      </List>
    </>
  );
}
