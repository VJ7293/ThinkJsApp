// src/components/TableComponent.js
"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";

import { tableData } from "../constants/tableData";
import tableConfig from "../constants/tableConfig.json"; // Use default import

console.log(tableConfig); // Check the output

const TableComponent = () => {
  const [filter, setFilter] = useState("");

  const filteredData = tableData.filter((item) =>
    item.rating.toString().includes(filter)
  );

  return (
    <TableContainer component={Paper}>
      <TextField
        label="Filter by rating"
        variant="outlined"
        margin="normal"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </TableContainer>
  );
};

export default TableComponent;
