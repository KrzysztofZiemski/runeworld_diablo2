import { Grid, List, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useMemo } from "react";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import {
  updateItemType,
  updateManyItemTypes,
} from "../../../store/filters/actions";
import { AllItemsTypeSelector } from "../../../store/filters/selectors";
import { ArmorType, WeaponName, WeaponType } from "../../../types/items";
import FilterCategoryTitle from "../FilterCategoryTitle";
import ListItemFilter from "../ListItemFilter";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  list: {
    flexGrow: 1,
    marginTop: `${theme.spacing(2)} !important`,
    justifyContent: "space-between",
    borderTop: `3px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.up("sm")]: {
      borderTop: "none",
      margin: `0px !important`,
      padding: `0px !important`,
    },
  },
}));

const armorType = Object.keys(ArmorType);
const weaponType = Object.keys(WeaponType);
const weaponName = Object.keys(WeaponName);

const allItemsArr = [...armorType, ...weaponType, ...weaponName];

export default function TypeItemsListFilter() {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const itemsStatus = useSelector(AllItemsTypeSelector);

  const isAllChecked = useMemo(() => {
    let isAllChecked = true;
    allItemsArr.forEach((name) => {
      // @ts-ignore
      if (itemsStatus[name] !== true) isAllChecked = false;
    });
    return isAllChecked;
  }, [itemsStatus]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as any;
    const value = e.target.checked;
    dispatch(updateItemType({ name, value }));
  };
  const title = intl.formatMessage({
    id: "tableHeaders.allowedTypeItems",
    defaultMessage: "Allowed Items",
  });

  const onChangeAll = () => {
    const value = !isAllChecked;

    const payload = allItemsArr.map((nameItem) => {
      const name = nameItem as ArmorType | WeaponType | WeaponName;
      return { name, value };
    });

    dispatch(updateManyItemTypes(payload));
  };

  return (
    <>
      <FilterCategoryTitle title={title} />
      <ListItemFilter
        name={"allItems"}
        onChange={onChangeAll}
        checked={isAllChecked}
      >
        {intl.formatMessage({
          id: `ItemType.allItems`,
        })}
      </ListItemFilter>
      <Grid className={classes.root}>
        {[armorType, weaponType, weaponName].map((itemCantegory, index) => {
          return (
            <List dense={false} className={classes.list} key={index}>
              {itemCantegory.map((key) => (
                <ListItemFilter
                  key={key}
                  name={key}
                  onChange={onChange}
                  checked={itemsStatus[key]}
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
    </>
  );
}
