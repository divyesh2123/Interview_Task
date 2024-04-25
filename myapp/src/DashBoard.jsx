import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import EmployeeForm from './EmployeeForm';
import DisplayDataWithGrid from './DisplayDataWithGrid';
import { EmployeeDashboard } from './EmployeeDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { api } from './CreateApi';

const DashBoard = () => {
   
    const [open,setOpen] = useState(false);
   

    const data = useSelector(y=>y.leave);

    console.log(data);

    const dis = useDispatch();

    useEffect(()=> {
      dis(api())
    },[])

    const handleClickOpen = () =>{
        setOpen(true);
    }
    
    const handleClose = () =>{
        setOpen(false);
    }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} >
        Apply Leave
      </Button>
      <EmployeeForm  open={open} handleClose={handleClose} data={data} />
      <DisplayDataWithGrid data={data?.leaves}/>
      
    </div>
  )
}

export default DashBoard
