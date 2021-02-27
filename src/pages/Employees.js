import React from "react";
import Menu from "../components/Menu";
import EmpCard from "../components/EmpCard";
import employees from "../employees.json";

function Employees() {
  return (
    <div id="employeePage">
      <Menu />
      <div id="empWrapper">
        <h1>Employees</h1>

        {employees.map((employee) => (
          <EmpCard
            name={employee.name}
            emp_id={employee.emp_id}
            login={employee.login}
            is_manager={employee.is_manager}
          />
        ))}
      </div>
    </div>
  );
}

export default Employees;
