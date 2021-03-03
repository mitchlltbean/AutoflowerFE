import { React, useEffect, useState } from "react";
import Menu from "../components/Menu";
import EmpCard from "../components/EmpCard";
import AddEmployee from "../components/AddEmployee";
// import employees from "../employees.json";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
import Footer from "../components/Footer";

function Employees(props) {
  const [employees, setEmployees] = useState([]);

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
  //handle delete employee
  const handleDeleteEmployee = (id) => {
    console.log("HANDLE DELETE Employee", id);
    const token = localStorage.getItem("token");
    console.log(token, "TOKEN FOR DELETE");
    API.deleteEmployee(token, id).then(({ data }) => {
      console.log(data, "SET new All employees state after delete");
      API.getAllemployees(token)
        .then(({ data }) => {
          console.log(data);
          setEmployees(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div id="employeePage">
      <Menu />
      <div id="empWrapper">

        <h1>Employees</h1>

        <AddEmployee/>

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
              emp_id={employee.id}
              login={employee.login}
              is_manager={employee.is_manager}
              handleDeleteEmployee={handleDeleteEmployee}
            />
          ))}
        </Grid>
      </div>
      {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
      <Footer />
    </div>
  );
}

export default Employees;
