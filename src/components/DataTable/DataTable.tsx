import {
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ListItem,
} from "@mui/material";
import React from "react";

//@ts-ignore
function createData(name, type, sockets, runes, reqLvl, stats) {
  return { name, type, sockets, runes, reqLvl, stats };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 1),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 1),
  createData("Eclair", 262, 16.0, 24, 6.0, 1),
  createData("Cupcake", 305, 3.7, 67, 4.3, 1),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1),
];

interface DataTableProps {
  headers: string[];
  rows: Array<any[]>;
}

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((el) => (
              <TableCell>{el}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {row.map((cell) => (
                <TableCell>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
