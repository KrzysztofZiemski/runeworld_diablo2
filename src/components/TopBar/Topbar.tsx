import {
  AppBar,
  Theme,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  Hidden,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/appConfig/actions";
import { Language } from "../../types/language";
import { AllSettingsStoreSelector } from "../../store/appConfig/selectors";
import MainContact from "../MainContact/MainContact";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    background: theme.palette.primary.main,
    width: "100%",
    zIndex: 1301,
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
  language: {
    width: 67,
    padding: "0px !important",
    marginLeft: 2,
    backgroundColor: theme.palette.common.white,

    "& .MuiSelect-select": {
      padding: theme.spacing(1),
    },
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();
  const setting = useSelector(AllSettingsStoreSelector);

  const handleLanguageChange = (e: SelectChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Language;
    dispatch(changeLanguage(value));
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Typography component="h1" variant="h5" sx={{ marginRight: "auto" }}>
          {intl.formatMessage({
            id: "title",
            defaultMessage: "Diablo 2 Resurrected Runewords",
          })}
        </Typography>

        <Hidden smDown>
          <MainContact />
        </Hidden>
        <Select
          onChange={handleLanguageChange}
          //  @ts-ignore
          value={setting.language}
          className={classes.language}
        >
          <MenuItem value={Language.PL}>
            {intl.formatMessage({
              id: "language.pl",
              defaultMessage: "PL",
            })}
          </MenuItem>
          <MenuItem value={Language.EN}>
            {intl.formatMessage({
              id: "language.en",
              defaultMessage: "EN",
            })}
          </MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}
