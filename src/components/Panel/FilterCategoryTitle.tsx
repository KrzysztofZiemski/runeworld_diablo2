import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

export default function FilterCategoryTitle({ title }: { title: string }) {
  const classes = useStyles();
  return (
    <Typography variant="h6" component="h2" className={classes.root}>
      {title}
    </Typography>
  );
}
