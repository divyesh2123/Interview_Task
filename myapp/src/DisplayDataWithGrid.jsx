import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, colors } from "@mui/material";
import {useNavigate}  from 'react-router-dom'

const DisplayDataWithGrid = (props) => {
  const columns = [
   
    
    { field: "EndDate", headerName: "Date", width: 250,
    renderCell: params =>{

      
      return (params.row.FromDate + "  "  +  params.row.EndDate)
    } },
    { field: "Status", headerName: "Status", width: 150, 
  
    renderCell: params =>{

     
      return (
        <div style={{color: params.row.status == "Pending"? "yellow" : params.row.status == "Confirm"? "green":"red"}}> {params.row.status}</div>
        
    
    )
    }
  
  
  },
    { field: "Remark", headerName: "Remark", width: 150,renderCell: params =>{

     
      return (
        params.row.status == "Reject" && params.row.Remark
    )
    } },
    { field: "Reason", headerName: "Reason", width: 150 },
    
   
   
  ];

  

//   const navi = () =>{
//     let navigate = useNavigate()
//   }
  return (
    <div style={{ height: 300, width: "100%", textAlign: "left" }}>
      <Button variant="outlined" style={{ height: 30, width: "20%" }}>
        Login/Logout
      </Button>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  );
};

export default DisplayDataWithGrid;
