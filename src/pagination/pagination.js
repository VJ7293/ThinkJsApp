"use client";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

const PageIndicator = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    if (onPageChange) {
      onPageChange(value);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        className="shadow-md rounded-lg"
        classes={{
          root: "bg-white", // Tailwind for background
        }}
      />
    </div>
  );
};

export default PageIndicator;
