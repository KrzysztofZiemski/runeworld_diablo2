import { Hidden } from "@mui/material";
import ItemsList from "./ItemsList";
import ItemsTable from "./ItemsTable";

export default function ItemsBody() {
  return (
    <>
      <Hidden mdDown>
        <ItemsTable />
      </Hidden>
      <Hidden mdUp>
        <ItemsList />
      </Hidden>
    </>
  );
}
