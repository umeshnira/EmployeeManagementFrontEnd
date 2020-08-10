import React, { useState, useEffect, useRef } from "react";
import {
  TableProcessSalary,
  TopRowProcessSalary,
} from "../../components/payRoll/index";
import { empList } from "../../datas/employee";

const SalaryProccess = () => {
  const [searchArrEmployee, setSearchArrEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  useEffect(() => {
    setSearchArrEmployee(empList);
  }, []);

  // Function.
  // search employee.
  const handleSearchEmployee = React.useCallback((val) => {
    let tempArr = empList.filter(
      (el) =>
        String(el.value.empId).toLowerCase().indexOf(val) !== -1 ||
        String(el.value.empName).toLowerCase().indexOf(val) !== -1 ||
        String(el.value.department).toLowerCase().indexOf(val) !== -1
    );
    setSearchArrEmployee(tempArr);
  }, []);

  // when select all employee is selected.
  const handleSelectAllEmployee = React.useCallback(
    (e) => {
      // ****when employee list coming from DB, give dependencies.
      e.target.checked ? setSelectedEmployee(empList) : setSelectedEmployee([]);
    },
    [setSelectedEmployee]
  );
  // get selcted employee from TableProcessSalary.
  const handleSelectEmployee = React.useCallback(
    (e, employeeDetails) => {
      if (e.target.checked === true) {
        setSelectedEmployee((prevState) => prevState.concat(employeeDetails));
      } else {
        let tempArr = selectedEmployee.filter(
          (el) => el.value.empId !== employeeDetails.value.empId
        );
        setSelectedEmployee(tempArr);
      }
    },
    [setSelectedEmployee, selectedEmployee]
  );

  return (
    <>
      <TopRowProcessSalary
        handleSearchEmployee={handleSearchEmployee}
      ></TopRowProcessSalary>
      <TableProcessSalary
        empList={searchArrEmployee}
        selectedEmployee={selectedEmployee}
        handleSelectEmployee={handleSelectEmployee}
        handleSelectAllEmployee={handleSelectAllEmployee}
      ></TableProcessSalary>
    </>
  );
};

export default SalaryProccess;
