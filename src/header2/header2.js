"use client";
import React from "react";
import ".././app/globals.css";
import Button from "@mui/material/Button";
import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import UpdateDisabledOutlinedIcon from "@mui/icons-material/UpdateDisabledOutlined";
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
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "10ch",
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F7FBFC", color: "gray" ,boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.2)",}}
    >
      <Toolbar className="flex justify-between items-center ">
        {/* Left Side */}
        <Box className="flex items-center  ">
          {/* <IconButton edge="start" color="inherit"> */}
          {/* <div className="text-sm w-1/2  items-center flex justify-between pr-9">
             
              <p className="">Home</p>
            </div> */}
          {/* <Home style={{ fontSize: "16px" }} />
            <Typography
              variant="body1"
              className="items-center ml-9 hidden sm:inline-block text-gray-900"
              style={{ fontSize: "12px", margin: "4px" }}
            ></Typography> */}
          {/* </IconButton> */}
          {/* <IconButton edge="start" color="inherit">
            <Inventory style={{ fontSize: "16px" }} />
            <Typography
              variant="body1"
              className="ml-2 hidden sm:inline-block text-gray-900"
              style={{ fontSize: "12px", margin: "4px" }}
            >
              Inventory
            </Typography>
          </IconButton> */}
          {/* <IconButton edge="start" color="inherit">
            <Layers style={{ fontSize: "16px" }} />
            <Typography
              variant="body1"
              className="ml-2 hidden sm:inline-block text-gray-900"
              style={{ fontSize: "12px" }}
            >
              Layers
            </Typography>
          </IconButton> */}
          <Typography variant="body1" className="font-bold">
            {/* <span
              className="hover-green font-bold transition duration-200 "
              style={{
                margin: "0 23px",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "2px 2px 2px 2px",
              }}
            >
               PRIMARY
            </span> */}
            <Button
              variant="outlined"
              className="font-bold mr-24px"
              sx={{
                // fontSize: "16px",
                // // borderColor: "#329140",
                // backgroundColor: "#ECF3EC",
                // border: "none",
                // color: "#329140",
                // borderRadius: "12px",
                // textTransform: "none",
                // padding: "8px 16px",
                // marginTop: "12px",
                // marginRight: "12px",
                // "&:hover": {
                //   backgroundColor: "#329140",
                //   color: "#ffffff",
                //   borderColor: "#329140",
                // },
                fontSize: "16px",
                borderColor: "#ECF3EC",
                // backgroundColor: "#ECF3EC",

                color: "#52656D",
                borderRadius: "12px",
                textTransform: "none",
                padding: "8px 16px",
                marginTop: "12px",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "#ECF3EC",
                  //   color: "#ffffff",
                  color: "#329140",
                  borderColor: "#ECF3EC",
                },
              }}
            >
              • PRIMARY
            </Button>
            {/* <span
              className="hover-green transition duration-200  font-bold"
              style={{ margin: "0 23px", fontSize: "16px", fontWeight: "bold" }}
              sx={{
                fontSize: "12px",
                // borderColor: "#329140",
                backgroundColor: "#ECF3EC",
                border: "none",
                color: "#329140",
                borderRadius: "12px",
                textTransform: "none",
                padding: "8px 16px",
                marginTop: "12px",
                "&:hover": {
                  backgroundColor: "#329140",
                  color: "#ffffff",
                  borderColor: "#329140",
                },
              }}
            >
              •SECONDARY
            </span> */}
            <Button
              variant="outlined"
              className="font-bold"
              sx={{
                // fontSize: "16px",
                // // borderColor: "#329140",
                // // backgroundColor: "#ECF3EC",
                // border: "none",
                // color: "#52656D",
                // borderRadius: "12px",
                // textTransform: "none",
                // padding: "8px 16px",
                // marginTop: "12px",
                // marginRight: "12px",
                // "&:hover": {
                //   backgroundColor: "#ECF3EC",
                //   //   color: "#ffffff",
                //   color: "#329140",
                //   //   borderColor: "#329140",
                // },
                fontSize: "16px",
                // borderColor: "#329140",
                // backgroundColor: "#ECF3EC",
                borderColor: "#ECF3EC",
                border: "none",
                color: "#52656D",
                borderRadius: "12px",
                textTransform: "none",
                padding: "8px 16px",
                marginTop: "12px",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "#ECF3EC",
                  //   color: "#ffffff",
                  color: "#329140",
                  borderColor: "#ECF3EC",
                },
              }}
            >
              • SECONDARY
            </Button>
            {/* <span
              className="hover-green p-9 m-9 rounded  font-bold"
              style={{
                margin: "0 23px",
                fontSize: "16px",
                padding: "0 3px",
                fontWeight: "bold",
              }}
            >
              THIRDLY
            </span> */}
            <Button
              variant="outlined"
              className="font-bold"
              sx={{
                // fontSize: "16px",
                // // borderColor: "#329140",
                // backgroundColor: "#ECF3EC",
                // border: "none",
                // color: "#329140",
                // borderRadius: "12px",
                // textTransform: "none",
                // padding: "8px 16px",
                // marginTop: "12px",
                // marginRight: "12px",
                // "&:hover": {
                //   backgroundColor: "#329140",
                //   color: "#ffffff",
                //   borderColor: "#329140",
                // },
                fontSize: "16px",
                // borderColor: "#329140",
                // backgroundColor: "#ECF3EC",
                borderColor: "#ECF3EC",
                border: "none",
                color: "#52656D",
                borderRadius: "12px",
                textTransform: "none",
                padding: "8px 16px",
                marginTop: "12px",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "#ECF3EC",
                  //   color: "#ffffff",
                  color: "#329140",
                  borderColor: "#ECF3EC",
                },
              }}
            >
              • THIRDLY
            </Button>
          </Typography>
        </Box>

        {/* Search Box */}
        {/* <SearchBox className=" sm:block">
          <SearchIconWrapper>
            <Search className="text-grey-800" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Quicksearch…"
            inputProps={{ "aria-label": "search" }}
            className="text-gray-900 rounded-l-full"
            style={{
              fontSize: "12px",
              borderRadius: "12px 12px 12px 12px",
              border: "2px solid #ccc",
              backgroundColor: "white",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
              //   padding: "5px",
            }}
          />
        </SearchBox> */}

        {/* Right Side */}
        <div className="flex space-x-4">
          {/* <Button
            // className="transition duration-200 p-3  rounded-lg shadow-md hover:bg-[#329140] hover:border hover:border-[#66b285] hover:text-white"
            className="header2 border-button font-bold transition duration-200 p-3 shadow-md bg-[#f5f5f5] border-2 border-transparent hover:bg-[#329140] hover:border-[#66b285] hover:text-customGreen"
            style={{
              //   fontSize: "12px",
              //   color: "#329140",
              //   textTransform: "none",
              //   backgroundColor: "hover-green1", // Light grey background by default
              //   border: "2px solid transparent", // Transparent border initially
              fontSize: "12px",
              color: "#329140",
              textTransform: "white",
              border: "customGreen",
              borderRadius: "12px 12px 12px 12px",
              // Light grey background by default
              border: "2px solid #329140",
              marginRight: "9px",
              "&:hover": {
                backgroundColor: "#329140",
                color: "#ffffff",
                borderColor: "#329140",
              },
            }}
          > */}
          <Button
            variant="outlined"
            className="font-bold"
            sx={{
              fontSize: "16px",
              borderColor: "#329140",
              color: "#329140",
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 16px",
              marginTop: "12px",
              marginRight: "9px",
              "&:hover": {
                backgroundColor: "#329140",
                color: "#ffffff",
                borderColor: "#329140",
              },
            }}
          >
            <UpdateDisabledOutlinedIcon />
            Update Data BD
          </Button>
          {/* <Button
            className="header2 border-button font-bold rounded-md  border-customGreen  "
            style={{
              fontSize: "12px",
              color: "#329140",
              textTransform: "none",
              border: "customGreen",
              borderRadius: " 12px",
              // Light grey background by default
              border: "2px solid #329140", // Transparent border initially
            }}
          > */}
          <Button
            variant="outlined"
            className="font-bold"
            sx={{
              fontSize: "16px",
              borderColor: " #329140",
              color: "#329140",
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 16px",
              marginTop: "12px",
              marginRight: "9px",
              "&:hover": {
                backgroundColor: "#329140",
                color: "#ffffff",
                borderColor: "#329140",
              },
            }}
          >
            <UpdateOutlinedIcon /> Update Inventory
          </Button>
          <InfoOutlinedIcon
            style={{
              //   fontSize: "12px",
              color: "#329140",
              marginTop: "20px",
              marginLeft: "1px",
              //   textTransform: "none",
              //   border: "customGreen",
              //   borderRadius: " 12px",
              // Light grey background by default
              //   border: "2px solid #329140", // Transparent border initially
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
