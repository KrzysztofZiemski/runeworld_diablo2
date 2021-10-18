import {
  Grid,
  TableCell,
  TableCellBaseProps,
  Theme,
  Typography,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { ItemsTableHeaders } from "./ItemsTable";
import { makeStyles } from "@mui/styles";
import { ElementType } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  cell: {
    border: `1px solid ${theme.palette.primary.main}`,
    "& th": {
      border: "none !important",
    },
  },
  th: {
    border: "none",
  },
}));

interface CellProps {
  handleSort?: (name: ItemsTableHeaders) => void;
  text: string | number | React.ReactNode;
  name?: ItemsTableHeaders;
  component?: ElementType<TableCellBaseProps>;
}
export default function Cell({
  handleSort,
  text,
  name,
  component = "td",
}: CellProps) {
  const classes = useStyles();
  return handleSort && name ? (
    <TableCell
      component={component}
      align="center"
      className={component === "th" ? classes.th : classes.cell}
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
    <TableCell
      component={component}
      key={name}
      className={component === "th" ? classes.th : classes.cell}
      align="center"
    >
      {typeof text === "string" || typeof text === "number" ? (
        <Typography sx={{ whiteSpace: "nowrap" }}>{text} </Typography>
      ) : (
        text
      )}
    </TableCell>
  );
}
