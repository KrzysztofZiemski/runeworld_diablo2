import TypeItemsListFilter from "./TypeItemsListFilter/TypeItemsListFilter";
import RuneListFilter from "./RuneListFilter/RuneListFilter";
import FilterCategoryContainer from "./FilterCategoryContainer";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SocketFilter from "./SocketFilter/SocketFilter";

// @ts-ignore
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "space-between",
    overflow: "auto",
  },
}));

export default function Panel() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <FilterCategoryContainer>
        <RuneListFilter />
      </FilterCategoryContainer>
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
