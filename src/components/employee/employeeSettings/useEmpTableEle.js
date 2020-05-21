import React from "react";
import { useEffect, useState } from "react";

const useEmpTableEle = (empList) => {
  const [trow, setTrow] = useState([]);
  const [thead] = useState([
    "name",
    "employee id",
    "email",
    "mobile",
    "join date",
    "role",
    "action",
  ]);

  useEffect(() => {
    let trow = empList.map((emp, i) => {
      return {
        name: (
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
        "employee id": <div style={{ width: "106px" }}>{emp.value.empId}</div>,
        email: emp.value.niraMailId,
        mobile: <div style={{ width: "71px" }}>{emp.value.mobileNo}</div>,
        "join date": <div style={{ width: "91px" }}>{emp.value.doj} </div>,
        role: <div style={{ minWidth: "auto" }}>{emp.value.designation}</div>,
      };
    });

    setTrow(trow);
  }, [empList]);
  return { thead, trow };
};

export default useEmpTableEle;
