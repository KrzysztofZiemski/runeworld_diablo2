import { AppBar, Theme, Toolbar, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useIntl } from "react-intl";
import MailIcon from "@mui/icons-material/Mail";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.main,
    width: "100%",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "4%",
    "& span": {
      marginLeft: 5,
    },
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography component="h1" variant="h5">
          {intl.formatMessage({
            id: "title",
            defaultMessage: "Diablo 2 Resurrected Runewords",
          })}
        </Typography>
        <IconButton
          onClick={() => {
            window.open("mailto:k.b.ziemski@gmail.com");
          }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="contact"
          sx={{ mr: 3, marginLeft: "auto" }}
        >
          <MailIcon />
          <Typography sx={{ marginLeft: 2 }}>k.b.ziemski@gmail.com</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
