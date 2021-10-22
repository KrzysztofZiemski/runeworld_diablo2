import TypeItemsListFilter from "./TypeItemsListFilter/TypeItemsListFilter";
import RuneListFilter from "./RuneListFilter/RuneListFilter";
import FilterCategoryContainer from "./FilterCategoryContainer";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SocketFilter from "./SocketFilter/SocketFilter";

// @ts-ignore
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
  subContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column !important",
    justifyContent: "space-between",
    overflow: "auto",
  },
}));

export default function Panel() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.subContainer}>
        <FilterCategoryContainer>
          <RuneListFilter />
        </FilterCategoryContainer>
      </Grid>
      <Grid className={classes.subContainer}>
        <FilterCategoryContainer>
          <TypeItemsListFilter />
        </FilterCategoryContainer>
        <FilterCategoryContainer>
          <SocketFilter />
        </FilterCategoryContainer>
      </Grid>
    </Grid>
  );
}
