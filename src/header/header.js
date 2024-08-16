"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Box,
} from "@mui/material";

import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import {
  Home,
  Inventory,
  Layers,
  Search,
  HelpOutline,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { styled, alpha } from "@mui/material/styles";

const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "gray",
        width: "100%",
        boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.2)",
        // left: 0,
        // right: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%", // Ensure full width
          padding: "0 16px", // Optional: Adjust padding
        }}
      >
        {/* Left Side */}

        <Box className="flex items-center  font-bold">
          <AcUnitIcon
            style={{
              fontSize: "32px",

              fontWeight: "bold",
              color: "#329140",
            }}
          />
          <IconButton edge="start" color="inherit">
            {/* <div className="text-sm w-1/2  items-center flex justify-between pr-9">
             
              <p className="">Home</p>
            </div> */}
            <Home
              style={{
                fontSize: "30px",
                margin: "0px 0px 0px 32px ",
                fontWeight: "bold",
              }}
            />
            <Typography
              variant="body1"
              className="items-center font-bold ml-9 hidden sm:inline-block text-gray-900"
              style={{ fontSize: "16px", margin: "0px 40px 0px 0px" }}
            >
              Home
            </Typography>
          </IconButton>
          <IconButton edge="start" color="inherit">
            <Inventory
              style={{
                fontSize: "30px",
                marginRight: "0px 0px 0px 90px",
                fontWeight: "bold",
              }}
            />
            <Typography
              variant="body1"
              className="ml-2 font-bold hidden sm:inline-block text-gray-900"
              style={{ fontSize: "16px", margin: "0px 40px 0px 0px" }}
            >
              Inventory
            </Typography>
          </IconButton>
          <IconButton edge="start" color="inherit">
            <Layers style={{ fontSize: "30px", fontWeight: "bold" }} />
            <Typography
              variant="body1"
              className="ml-2 font-bold hidden sm:inline-block text-gray-900"
              style={{ fontSize: "16px" }}
            >
              Layers
            </Typography>
          </IconButton>
        </Box>

        {/* Search Box */}
        <div className="flex">
          <SearchBox className="flex sm:block">
            <SearchIconWrapper>
              <Search className="text-gray-800" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Quicksearch…"
              inputProps={{ "aria-label": "search" }}
              className="text-gray-900 "
              style={{
                fontSize: "12px",
                borderRadius: "12px",
                border: "2px solid #ccc",

                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                padding: "5px 5px 5px 40px", // Ensure padding on the left for the icon
                position: "relative", // Ensure relative positioning
                zIndex: 1, // Make sure it appears above other elements
              }}
            />
          </SearchBox>

          {/* Right Side */}
          <Box className="flex items-center space-x-9 ">
            <IconButton
              color="inherit"
              sx={{
                border: "2px solid #d3d3d3", // Light grey border
                borderRadius: "12px", // Optional: rounded corners
                padding: "12px", // Optional: adjust padding
                marginRight: "9px",
                "&:hover": {
                  borderColor: "#b0b0b0", // Slightly darker grey on hover
                },
              }}
            >
              <HelpOutline className="text-gray-500" />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                border: "2px solid #d3d3d3", // Light grey border
                borderRadius: "12px", // Optional: rounded corners
                padding: "12px", // Optional: adjust padding
                marginRight: "9px",
                "&:hover": {
                  borderColor: "#b0b0b0", // Slightly darker grey on hover
                },
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <Notifications className="text-gray-500" />
              </Badge>
            </IconButton>
            <Box
              className="flex items-center ml-9"
              sx={{
                border: "2px solid #d3d3d3", // Light grey border
                borderRadius: "16px", // Optional: rounded corners
                padding: "6px", // Optional: adjust padding

                "&:hover": {
                  borderColor: "#b0b0b0", // Slightly darker grey on hover
                },
              }}
            >
              <Typography
                variant="body1"
                className="ml-2 font-bold border-slate-800 border-2 hidden sm:inline-block text-gray-900"
              >
                Username
              </Typography>
              <IconButton edge="end" color="inherit">
                <PersonSharpIcon style={{ color: "#329140" }} />
              </IconButton>
            </Box>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
