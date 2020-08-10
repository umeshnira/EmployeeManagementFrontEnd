import React, { Fragment, useState, useEffect } from "react";
import TableWithSortPagtn from "../../common/TableWithSortPagtn";
import DropDownActions from "../../common/DropDownActions";
import { Button, Label, Input } from "reactstrap";

const TableProcessSalary = React.memo(
  ({
    empList,
    selectedEmployee,
    handleSelectAllEmployee,
    handleSelectEmployee,
  }) => {
    const [thead] = useState([
      "select",
      "employee name",
      "id",
      "email",
      "join date",
      "role",
      "salary",
      "pay slip",
      "action",
    ]);
    const [trow, setTrow] = useState([]);

    useEffect(() => {
      console.log(selectedEmployee);
      let trow = [];
      let checkAll = [];
      // to make checkbox selected/un-selected when Select All checkbox clicked.
      selectedEmployee.map((el) => checkAll.push(el.value.empId));

      trow.push({
        select: (
          <div className="text-center">
            <div style={{ width: "70px" }}>
              <input
                type="checkbox"
                onChange={(e) => handleSelectAllEmployee(e)}
              />
            </div>
            <small> Select All</small>
          </div>
        ),
      });
      let tempTrow = empList.map((emp) => ({
        select: (
          <div style={{ width: "70px" }} className="text-center">
            <input
              type="checkbox"
              onChange={(e) => handleSelectEmployee(e, emp)}
              checked={checkAll.includes(emp.value.empId)}
            />{" "}
          </div>
        ),
        "employee name": (
          <h2 class="table-avatar">
            <img
              class="profile-img-table"
              alt=""
              src={require(`../../../img/employee/${emp.value.profileImg}`)}
            />
            <span className="ml-2">
              <span style={{ fontWeight: "600", color: "black" }}>
                {emp.value.empName}
              </span>
              <span> {emp.value.designation}</span>
            </span>
          </h2>
        ),
        id: (
          <div className="text-center" style={{ width: "70px" }}>
            {emp.value.empId}
          </div>
        ),
        email: <div>{emp.value.niraMailId}</div>,
        "join date": <div style={{ width: "100px" }}>{emp.value.doj}</div>,
        role: <div>{emp.value.department}</div>,
        salary: <div style={{ width: "80px" }}>{emp.value.salary}</div>,
        "pay slip": (
          <div style={{ width: "100px" }}>
            <Button className="btn-color">
              <small>Process Salary</small>
            </Button>
          </div>
        ),
        action: (
          <div style={{ width: "70px" }}>
            <DropDownActions
              dropDownOption={[
                { action: "Edit", handleAction: "" },
                { action: "Delete", handleAction: "" },
              ]}
            ></DropDownActions>
          </div>
        ),
      }));

      // append the select all check box with datas Arr.
      tempTrow.map((el) => trow.push(el));
      setTrow(trow);
    }, [
      empList,
      selectedEmployee,
      handleSelectEmployee,
      handleSelectAllEmployee,
    ]);

    return (
      <>
        <div style={{ maxWidth: "80vw", overflowY: "auto" }}>
          <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
        </div>
      </>
    );
  }
);

export default TableProcessSalary;
