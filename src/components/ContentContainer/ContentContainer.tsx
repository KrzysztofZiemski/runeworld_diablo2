import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
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
