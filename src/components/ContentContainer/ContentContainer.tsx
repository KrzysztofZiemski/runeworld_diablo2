import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function ContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
