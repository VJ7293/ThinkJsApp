// src/app/page.js
import React from "react";
import TableComponent from "../components/TableComponent";
import Header from "../header/header";
import Header2 from "../header2/header2";
import Button from "@mui/material/Button";
import Filter from "../filter/filter";
import FormComponent from "../filter2/filter2";
import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mt-5 rounded-lg">
        <Header2 />
      </div>

      <div className=" flex justify-between items-center  p-4 font-bold  text-2xl  mt-5">
        PRIMARY DATA
        
        <div className="  ">

          {" "}
          {/* <Filter /> */}
          <Button
            variant="outlined"
            className="font-bold"
            sx={{
              fontSize: "16px",
              // borderColor: "#329140",
              backgroundColor: "#ECF3EC",
              border: "none",
              color: "#329140",
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 16px",
              marginTop: "12px",
              marginRight: "12px",
              "&:hover": {
                backgroundColor: "#329140",
                color: "#ffffff",
                borderColor: "#329140",
              },
            }}
          >
            <PlaylistAddSharpIcon /> Add Service
          </Button>
          <Button
            variant="outlined"
            className="font-bold"
            sx={{
              fontSize: "16px",
              // borderColor: "#329140",
              backgroundColor: "#ECF3EC",
              border: "none",
              color: "#329140",
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 16px",
              marginTop: "12px",
              marginRight: "12px",
              "&:hover": {
                backgroundColor: "#329140",
                color: "#ffffff",
                borderColor: "#329140",
              },
            }}
          >
            <PlaylistAddSharpIcon /> Add Houk Service
          </Button>
          <br />
        </div>
      </div>
      <p className="ml-4 text-lg font-semibold text-slate-400  ">
        Parchment be turns stand veela fawkes mistletoe snare drops.
      </p>
      <TableComponent />
    </div>
  );
};

export default HomePage;
