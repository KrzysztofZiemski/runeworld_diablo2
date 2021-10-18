import { Grid, TableCell, Theme, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { ItemsTableHeaders } from "./ItemsTable";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  cell: {
    border: "1px solid black",
  },
}));

interface HeaderCellProps {
  handleSort?: (name: ItemsTableHeaders) => void;
  text: string | number | React.ReactNode;
  name?: ItemsTableHeaders;
}
export default function HeaderCell({
  handleSort,
  text,
  name,
}: HeaderCellProps) {
  const classes = useStyles();
  return handleSort && name ? (
    <TableCell
      align="center"
      className={classes.cell}
      key={name}
      sx={{
        cursor: "pointer",
        minWidth: 100,
      }}
      onClick={() => handleSort(name)}
    >
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        {typeof text === "string" || typeof text === "number" ? (
          <Typography sx={{ whiteSpace: "nowrap", marginRight: 2 }}>
            {text}
          </Typography>
        ) : (
          text
        )}
        <CompareArrowsIcon style={{ transform: "rotate(90deg)" }} />
      </Grid>
    </TableCell>
  ) : (
    <TableCell key={name} className={classes.cell} align="center">
      {typeof text === "string" || typeof text === "number" ? (
        <Typography sx={{ whiteSpace: "nowrap" }}>{text} </Typography>
      ) : (
        text
      )}
    </TableCell>
  );
}
