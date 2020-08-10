import React, { Fragment, useState, useEffect } from "react";
import TableWithSortPagtn from "../../common/TableWithSortPagtn";
import { Button, Card, CardBody } from "reactstrap";

const month = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TableSalaryReport = React.memo(({ empList }) => {
  const [thead] = useState([
    "employee name",
    "employee id",
    "email",
    "join date",
    "role",
    "salary",
    "month/year",
    "pay slip",
  ]);
  const [trow, setTrow] = useState([]);

  useEffect(() => {
    let trow = empList.map((emp) => ({
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
      "employee id": (
        <div className="text-center" style={{ width: "120px" }}>
          {emp.value.empId}
        </div>
      ),
      email: <div>{emp.value.niraMailId}</div>,
      "join date": <div style={{ width: "100px" }}>{emp.value.doj}</div>,
      role: <div>{emp.value.department}</div>,
      salary: <div style={{ width: "80px" }}>{emp.value.salary}</div>,
      "month/year": (
        <div style={{ width: "120px" }}>
          {`${month[emp.value.salaryDate.getMonth()]} -
            ${emp.value.salaryDate.getFullYear()}`}
        </div>
      ),
      "pay slip": (
        <div style={{ width: "100px" }}>
          <Button className="btn-color">
            <small>Generate Slip</small>
          </Button>
        </div>
      ),
    }));
    setTrow(trow);
  }, [empList]);
  return (
    // <Card>
    //   <CardBody style={{ width: "70%", overflowY: "auto" }}>
    //     <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
    //   </CardBody>
    // </Card>
    <div className="" style={{ maxWidth: "80vw", overflowY: "auto" }}>
      <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
    </div>
  );
});

export default TableSalaryReport;
