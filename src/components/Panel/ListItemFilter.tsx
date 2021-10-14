import { Checkbox, FormControlLabel, ListItem, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: { width: "auto !important" },
  label: {
    "& .MuiTypography-root": {
      display: "flex",
    },
  },
}));

export default function ListItemFilter({
  children,
  name,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) {
  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <FormControlLabel
        className={classes.label}
        control={<Checkbox checked={checked} onChange={onChange} name={name} />}
        label={children}
      />
    </ListItem>
  );
}
