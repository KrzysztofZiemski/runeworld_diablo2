import React from "react";
import { AppBar, Theme, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.main,
    width: "100%",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
