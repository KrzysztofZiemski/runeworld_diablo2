import { Grid, List, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { updateManyRunes, updateRune } from "../../../store/filters/actions";
import { AllRunesSelector } from "../../../store/filters/selectors";
import { Rune } from "../../../types/rune";
import { runeItems } from "../../../utils/runes";
import FilterCategoryTitle from "../FilterCategoryTitle";
import ListItemFilter from "../ListItemFilter";

const runesPart1 = runeItems.slice(0, 11);
const runesPart2 = runeItems.slice(11, 22);
const runesPart3 = runeItems.slice(22);

const partsRuneLists = [runesPart1, runesPart2, runesPart3];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    paddingTop: "0px !important",
    justifyContent: "space-between",
  },
}));

export default function RuneListFilter() {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const runesStatus = useSelector(AllRunesSelector);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as Rune;
    const value = e.target.checked;
    dispatch(updateRune({ name, value }));
  };

  const signAllRunesInPart = (index: number, value: boolean) => {
    const payload = partsRuneLists[index].map(({ name }) => ({ name, value }));
    dispatch(updateManyRunes(payload));
  };

  const title = intl.formatMessage({
    id: "tableHeaders.runes",
    defaultMessage: "Runes",
  });

  return (
    <Grid>
      <FilterCategoryTitle title={title} />
      <List dense={false} className={classes.root}>
        {partsRuneLists.map((list, index) => {
          const isAnyFalse = list.find(
            ({ name }) => runesStatus[name] === false
          );

          const massCheckboxTitle = intl.formatMessage({
            id: "other.all",
            defaultMessage: "all",
          });

          return (
            <div key={index}>
              <Grid>
                <ListItemFilter
                  name={`column-${index + 1}`}
                  checked={!isAnyFalse}
                  onChange={() =>
                    signAllRunesInPart(index, isAnyFalse ? true : false)
                  }
                >
                  {massCheckboxTitle}
                </ListItemFilter>
              </Grid>
              {list.map(({ name, src }) => (
                <ListItemFilter
                  key={name}
                  checked={runesStatus[name]}
                  onChange={onChange}
                  name={name}
                >
                  <img
                    src={src}
                    alt={name}
                    style={{ width: 25, marginRight: 5 }}
                  />
                  {name}
                </ListItemFilter>
              ))}
            </div>
          );
        })}
      </List>
    </Grid>
  );
}
