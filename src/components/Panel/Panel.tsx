import React from "react";
import { runeItems } from "../../utils/runes";
import TypeItemsListFilter from "./TypeItemsListFilter/TypeItemsListFilter";
import RuneListFilter from "./RuneListFilter/RuneListFilter";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function Panel() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <RuneListFilter list={runeItems} />
      <TypeItemsListFilter />
    </Grid>
  );
}
