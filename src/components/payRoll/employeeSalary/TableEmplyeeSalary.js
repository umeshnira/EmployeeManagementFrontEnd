import React, { Fragment, useState, useEffect } from "react";
import TableWithSortPagtn from "../../common/TableWithSortPagtn";
import DropDownActions from "../../common/DropDownActions";
import { Button, Card, CardBody } from "reactstrap";
import { empList } from "../../../datas/employee";

const TableEmplyeeSalary = React.memo(() => {
  const [thead] = useState([
    "employee name",
    "employee id",
    "email",
    "join date",
    "role",
    "salary",
    "pay slip",
    "action",
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
      "pay slip": (
        <div style={{ width: "100px" }}>
          <Button className="btn-color">
            <small>Generate Slip</small>
          </Button>
        </div>
      ),
      action: (
        <div style={{ width: "80px" }}>
          <DropDownActions
            dropDownOption={[
              { action: "Edit", handleAction: "" },
              { action: "Delete", handleAction: "" },
            ]}
          ></DropDownActions>
        </div>
      ),
    }));
    setTrow(trow);
  }, []);
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

export default TableEmplyeeSalary;
