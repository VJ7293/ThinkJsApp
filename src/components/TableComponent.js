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

import StarRating from "./StarRating";
import { tableData } from "../constants/tableData";
import tableConfig from "../constants/tableConfig.json"; // Use default import
import Filter2 from "../filter2/filter2";
console.log(tableConfig); // Check the output

const TableComponent = () => {
  const [filter, setFilter] = useState("");

  const filteredData = tableData.filter((item) =>
    item.rating.toString().includes(filter)
  );

  return (
    <TableContainer component={Paper}>
      <div className=" flex justify-between items-center align-center">
        {" "}
        <Filter2 />
        <TextField
          label="Filter by rating"
          variant="outlined"
          margin="normal"
          className=""
          style={{
            borderRadius: "12px 12px 12px 12px",
            border: "2px solid #ccc",
            backgroundColor: "white",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <Table>
        <TableHead>
          <TableRow>
            {tableConfig.headings.map((heading, index) => (
              <TableCell key={index}>{heading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <StarRating rating={item.rating} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
