// "use client";
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";

// const FormComponent = () => {
//   const [date, setDate] = useState("");
//   const [ornare, setOrnare] = useState("");
//   const [ultrices, setUltrices] = useState("");
//   const [erat, setErat] = useState("");

//   return (
//     <div className="p-4 space-y-6 flex justify-between">
//       {/* Date Picker */}
//       <TextField
//         type="date"
//         className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         placeholder="0.00"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />

//       {/* Ornare Select */}
//       <FormControl fullWidth>
//         <InputLabel id="ornare-label">Select Ornare</InputLabel>
//         <Select
//           labelId="ornare-label"
//           value={ornare}
//           className="px-32 mx-10 "
//           label="Ornare"
//           onChange={(e) => setOrnare(e.target.value)}
//         >
//           <MenuItem value="Option 1">Option 1</MenuItem>
//           <MenuItem value="Option 2">Option 2</MenuItem>
//           <MenuItem value="Option 3">Option 3</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Ultrices Select */}
//       <FormControl fullWidth>
//         <InputLabel id="ultrices-label">Select Ultrices</InputLabel>
//         <Select
//           labelId="ultrices-label"
//           className="px-32 mx-10 "
//           value={ultrices}
//           label="Select Ultrices"
//           onChange={(e) => setUltrices(e.target.value)}
//         >
//           <MenuItem value="Option A">Option A</MenuItem>
//           <MenuItem value="Option B">Option B</MenuItem>
//           <MenuItem value="Option C">Option C</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Erat Select */}
//       <FormControl fullWidth>
//         <InputLabel id="erat-label">Select Erat</InputLabel>
//         <Select
//           labelId="erat-label"
//           value={erat}
//           label="Select Erat"
//           onChange={(e) => setErat(e.target.value)}
//         >
//           <MenuItem value="Choice X">Choice X</MenuItem>
//           <MenuItem value="Choice Y">Choice Y</MenuItem>
//           <MenuItem value="Choice Z">Choice Z</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// };

// export default FormComponent;

"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const FormComponent = () => {
  const [date, setDate] = useState("");
  const [ornare, setOrnare] = useState("");
  const [ultrices, setUltrices] = useState("");
  const [erat, setErat] = useState("");

  return (
    <div className="p-4 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
      {/* Date Picker */}
      <TextField
        type="date"
        className="w-full md:w-1/4 rounded-md border-0 py-1.5 pl-3 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0.00"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{
          fontSize: "12px",
          borderRadius: "12px 12px 12px 12px",
          border: "2px solid #ccc",
          backgroundColor: "white",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
        
          margin: "0px 5px 0px 5px",
        }}
      />

      {/* Ornare Select */}
      <FormControl className="">
        <InputLabel id="ornare-label">Select Ornare</InputLabel>
        <Select
          labelId="ornare-label"
          value={ornare}
          className="w-full"
          label="Ornare"
          style={{
            fontSize: "16px",
            borderRadius: "12px 12px 12px 12px",
            border: "2px solid #ccc",
            backgroundColor: "white",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
            padding: "0px 55px 0px 55px",
            margin: "0px 5px 0px 5px",
          }}
          onChange={(e) => setOrnare(e.target.value)}
        >
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>

      {/* Ultrices Select */}
      <FormControl className="w-full md:w-1/4">
        <InputLabel id="ultrices-label">Select Ultrices</InputLabel>
        <Select
          labelId="ultrices-label"
          value={ultrices}
          className="w-full"
          label="Select Ultrices"
          style={{
            fontSize: "16px",
            borderRadius: "12px 12px 12px 12px",
            border: "2px solid #ccc",
            backgroundColor: "white",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
            padding: "0px 55px 0px 55px",
            margin: "0px 5px 0px 5px",
          }}
          onChange={(e) => setUltrices(e.target.value)}
        >
          <MenuItem value="Option A">Option A</MenuItem>
          <MenuItem value="Option B">Option B</MenuItem>
          <MenuItem value="Option C">Option C</MenuItem>
        </Select>
      </FormControl>

      {/* Erat Select */}
      <FormControl className="w-full md:w-1/4 font-semibold">
        <InputLabel id="erat-label">Select Erat</InputLabel>
        <Select
          labelId="erat-label"
          style={{
            fontSize: "16px",
            borderRadius: "12px 12px 12px 12px",
            border: "2px solid #ccc",
            backgroundColor: "white",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
            padding: "0px 55px 0px 55px",
            margin: "0px 5px 0px 5px",
          }}
          value={erat}
          className="w-full"
          label="Select Erat"
          onChange={(e) => setErat(e.target.value)}
        >
          <MenuItem value="Choice X">Choice X</MenuItem>
          <MenuItem value="Choice Y">Choice Y</MenuItem>
          <MenuItem value="Choice Z">Choice Z</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FormComponent;
