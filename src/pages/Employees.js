import { React, useEffect, useState } from "react";
import Menu from "../components/Menu";
import EmpCard from "../components/EmpCard";
// import employees from "../employees.json";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";

function Employees(props) {
  const [employees, setEmployees] = useState([]);
  // const [newTank,setNewTank]= useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    API.getAllemployees(token)
      .then(({ data }) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="employeePage">
      <Menu />
      <div id="empWrapper">
        <h1>Employees</h1>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          xs={12}
          // spacing={1}
          alignItems="baseline"
        >
          {employees.map((employee) => (
            <EmpCard
              name={employee.name}
              emp_id={employee.emp_id}
              login={employee.login}
              is_manager={employee.is_manager}
            />
          ))}
        </Grid>
      </div>
      {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
    </div>
  );
}

export default Employees;
