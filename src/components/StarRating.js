// src/components/StarRating.js
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const StarRating = ({ rating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} color={index < rating ? "primary" : "disabled"} />
      ))}
    </div>
  );
};

export default StarRating;
