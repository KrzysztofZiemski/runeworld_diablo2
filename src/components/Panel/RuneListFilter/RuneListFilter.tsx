import { List, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useMemo } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { updateRune } from "../../../store/filters/actions";
import { AllRunesSelector } from "../../../store/filters/selectors";
import { Rune, RuneItem } from "../../../types/rune";
import ListItemFilter from "../ListItemFilter";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    overflow: "auto",
    [theme.breakpoints.up("md")]: {
      // width: 600,
    },
  },
  runeColumn: {
    width: "50%",
    borderRight: "1px solid black",
    "&:last-child": {
      borderRight: "none",
    },
    [theme.breakpoints.up("md")]: {
      borderRight: "none",
    },
  },
}));

interface RunesListProps {
  list: RuneItem[];
}
export default function RuneListFilter({ list }: RunesListProps) {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const runesStatus = useSelector(AllRunesSelector);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as Rune;
    const value = e.target.checked;
    dispatch(updateRune({ name, value }));
  };

  const partsRuneLists = useMemo(() => {
    const x = list.slice(0, 11);
    const y = list.slice(11, 22);
    const z = list.slice(22);
    return [x, y, z];
  }, [list]);

  const signAllRunesInPart = (index: number, value: boolean) => {
    partsRuneLists[index].forEach(({ name }) => {
      dispatch(updateRune({ name, value }));
    });
  };

  return (
    <List dense={false} className={classes.root}>
      {partsRuneLists.map((list, index) => {
        const isAnyFalse = list.find(({ name }) => runesStatus[name] === false);

        const massCheckboxTitle = isAnyFalse
          ? intl.formatMessage({
              id: "other.selectAll",
              defaultMessage: "all",
            })
          : intl.formatMessage({
              id: "other.unselectAll",
              defaultMessage: "all",
            });

        return (
          <div key={index} className={classes.runeColumn}>
            <ListItemFilter
              name={`column-${index + 1}`}
              checked={!isAnyFalse}
              onChange={() =>
                signAllRunesInPart(index, isAnyFalse ? true : false)
              }
            >
              {massCheckboxTitle}
            </ListItemFilter>
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
  );
}
