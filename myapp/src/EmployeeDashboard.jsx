import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, colors } from "@mui/material";
import {useNavigate}  from 'react-router-dom'

export const EmployeeDashboard = (props) => {
  const columns = [
    { field: "fromDate", headerName: "From Date", width: 150 },
    { field: "toDate", headerName: "To Date", width: 150 },
    { field: "reason", headerName: "Reason", width: 150 },
    { field: "status", headerName: "Status", width: 150, color: "yellow" },
    { field: "", headerName: "Remarks", width: 150 },
  ];

//   let n = useNavigate();
//   const na = () =>{
//     n("/login")
//   }
const [data,setData] = useState([]);
const [open,setOpen] = useState(false);

const handleClickOpen = () =>{
    setOpen(true);
}

const handleClose = () =>{
    setOpen(false);
}
  return (
    <div style={{ height: 300, width: "100%", textAlign: "left" , marginTop: 50}}>
      <Button variant="outlined" style={{ height: 30, width: "20%" ,marginRight:10 }} >
        Login/Logout
      </Button>
      <Button variant="outlined" onClick={handleClickOpen} >
        Create Emp
      </Button>
      <Button variant="outlined" style={{ height: 30, width: "20%" }}>
        Date Filter
      </Button>
      <Button variant="outlined" style={{ height: 30, width: "20%" }}>
        Select Employee
      </Button>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  );
};
