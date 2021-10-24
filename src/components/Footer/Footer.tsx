import { Hidden, Grid, Theme } from "@mui/material";
import MainContact from "../MainContact/MainContact";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Hidden smUp>
        <MainContact />
      </Hidden>
    </Grid>
  );
}
