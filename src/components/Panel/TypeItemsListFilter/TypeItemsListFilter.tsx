import { Grid, List, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { updateItemType } from "../../../store/filters/actions";
import { AllItemsTypeSelector } from "../../../store/filters/selectors";
import { ArmorType, WeaponName, WeaponType } from "../../../types/items";
import ListItemFilter from "../ListItemFilter";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
  },
  list: {},
}));

export default function TypeItemsListFilter() {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const runesStatus = useSelector(AllItemsTypeSelector);

  const armorType = Object.values(ArmorType);
  const weaponType = Object.values(WeaponType);
  const weaponName = Object.values(WeaponName);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as any;
    const value = e.target.checked;
    dispatch(updateItemType({ name, value }));
  };

  return (
    <Grid className={classes.root}>
      {[armorType, weaponType, weaponName].map((itemCantegory, index) => {
        return (
          <List dense={false} className={classes.list} key={index}>
            {itemCantegory.map((key) => (
              <ListItemFilter
                key={key}
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
      })}
    </Grid>
  );
}
