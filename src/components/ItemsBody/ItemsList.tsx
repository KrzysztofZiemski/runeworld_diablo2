import { List, ListItem, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { items } from "../../utils/items";

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

type Row = {
  name: string;
  allowed: string;
  reqLvl: string;
  stats: string[];
  runes: string;
  sockets: number;
};

export default function ItemsList() {
  const intl = useIntl();
  const classes = useStyles();

  const rows: Row[] = useMemo(() => {
    return items.map((el) => {
      const allowed = el.allowed
        .map((itemType: any, index: number) =>
          intl.formatMessage({
            id: `ItemType.${itemType}`,
          })
        )
        .join(", ");

      const runes = el.runes.join(", ");
      const name = intl.formatMessage({
        id: `items.${el.name}`,
      });

      const reqLvl = `${intl.formatMessage({
        id: `tableHeaders.reqLvl`,
      })}: ${el.reqLvl}`;

      const stats = el.stats.map((stat) =>
        intl.formatMessage({
          ...stat,
        })
      );
      return {
        name,
        allowed,
        runes,
        sockets: el.runes.length,
        reqLvl,
        stats,
      };
    });
  }, [items]);

  return (
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
              {stats.map((stat) => {
                return (
                  <ListItem className={classes.statListItem}>{stat}</ListItem>
                );
              })}
            </List>
          </ListItem>
        );
      })}
    </List>
  );
}
