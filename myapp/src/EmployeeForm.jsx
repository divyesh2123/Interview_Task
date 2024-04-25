import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apisave } from "./CreateApi";

const EmployeeForm = (props) => {

  const disp = useDispatch();
  const [form, setForm] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
    status:"Pending"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
  

    disp(apisave(form))
    handleClose();
  };

  const { open, handleClose, data, setData } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="FromDate"
            name="FromDate"
            label="From Date"
            type="date"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="EndDate"
            name="EndDate"
            label="End Date"
            type="date"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="Reason"
            name="Reason"
            label="Reason"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="button" onClick={handleSave}>
            APPLY
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeForm;
