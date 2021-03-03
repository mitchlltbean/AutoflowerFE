import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// import AddCircle from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import API from "../../utils/API";
import { Tooltip } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 3),
  },

  savebutton: {
    backgroundColor: "lightgray",
    fontWeight: "bold",
  },

  addbutton: {
    fontWeight: "bold",
    float: "right",
    fontSize:"60px",
    color: "black",
  }

}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  const [employeeData, setEmployeedata] = useState({
    login: "",
    name: "",
    manager: "",
  });

  //handle create employee
  const handleCreateemployee = () => {
    console.log("HANDLE create Employee");
    const token = localStorage.getItem("token");
    console.log(employeeData, "emplyee DATA");
    API.create(token, employeeData, {
      login: employeeData.login,
      name: employeeData.name,
      manager: employeeData.manager,
    })
      .then(({ data }) => {
        console.log(data, "SET new All employees state after new employee");
        //push new employee? to state
        // setEmployeedata(data);
      })
      .catch((err) => {
        console.log(err);
      });
    refreshPage();
  };

  const HandleInputchange = (e) => {
    const { name, value } = e.target;
    console.log(e.target, "E TARGET");
    setEmployeedata({ ...employeeData, [name]: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //The Add Employee form
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add Employee</h2>
      <p id="simple-modal-description">Welcome, admin!</p>
      <p id="simple-modal-description">
        Create and save a new employee or manager to your database
      </p>

      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          name="name"
          label="name"
          value={employeeData.name}
          onChange={HandleInputchange}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="login"
          label="login"
          value={employeeData.login}
          onChange={HandleInputchange}
          variant="outlined"
        />
        <TextField
          id="standard-select-currency"
          name="manager"
          // select
          label="Manager? (true or false)"
          value={employeeData.manager}
          onChange={HandleInputchange}
          // helperText="Please select employee or manager"
        >
          <MenuItem>true</MenuItem>

          <MenuItem>false</MenuItem>
        </TextField>
      </form>

      <Button
        variant="contained"
        onClick={handleCreateemployee}
        className={classes.savebutton}
      >
        Save Employee
      </Button>
    </div>
  );

  return (
    <div>
      <Tooltip title="Add Employee">
      <PersonAdd
        variant ="contained"
        type="button"
        onClick={handleOpen}
        aria-label="add"
        fontSize="large"
        className ={classes.addbutton}
        // startIcon={<AddCircleOutline />}
      />
      </Tooltip>

      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
