import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useIntl } from "react-intl";
import { useGA } from "../../hooks/useGA";

export default function CookiesBanner() {
  const [isAccepted, setIsAccepted] = useGA();

  const intl = useIntl();

  return (
    <Dialog open={isAccepted === undefined}>
      <DialogTitle
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {intl.formatMessage({
          id: "cookies.title",
          defaultMessage: "We care about your privacy",
        })}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {intl.formatMessage({
            id: "cookies.content",
            defaultMessage:
              "We store information on the device and use them to keep the application working properly.",
          })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => setIsAccepted(false)}>
          {intl.formatMessage({
            id: "other.disagree",
            defaultMessage: "disagree",
          })}
        </Button>
        <Button variant="contained" onClick={() => setIsAccepted(true)}>
          {intl.formatMessage({
            id: "other.agree",
            defaultMessage: "agree",
          })}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
