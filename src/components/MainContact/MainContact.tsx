import { IconButton, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export default function MainContact() {
  return (
    <IconButton
      onClick={() => {
        window.open("mailto:k.b.ziemski@gmail.com");
      }}
      size="large"
      edge="start"
      color="inherit"
      aria-label="contact"
    >
      <MailIcon />
      <Typography sx={{ marginLeft: 2 }}>k.b.ziemski@gmail.com</Typography>
    </IconButton>
  );
}
