import { List, ListItem, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { updateItemType } from "../../../store/filters/actions";
import { AllItemsTypeSelector } from "../../../store/filters/selectors";
import { ItemType, Weapon } from "../../../types/items";
import ListItemFilter from "../ListItemFilter";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

export default function TypeItemsListFilter() {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const runesStatus = useSelector(AllItemsTypeSelector);

  const itemTypeArr = Object.values(ItemType);
  const weaponArr = Object.values(Weapon);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as ItemType;
    const value = e.target.checked;
    dispatch(updateItemType({ name, value }));
  };

  return (
    <List dense={false} className={classes.root}>
      {itemTypeArr.map((key) => (
        <ListItemFilter
          name={key}
          onChange={onChange}
          checked={runesStatus[key]}
        >
          {intl.formatMessage({
            id: `ItemType.${key}`,
          })}
        </ListItemFilter>
      ))}
    </List>
  );
}
