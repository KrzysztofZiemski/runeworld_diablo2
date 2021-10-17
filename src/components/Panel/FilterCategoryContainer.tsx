import { Paper, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));
export default function FilterCategoryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      {children}
    </Paper>
  );
}
