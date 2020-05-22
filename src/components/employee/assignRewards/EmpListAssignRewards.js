import React from "react";
import { Table } from "reactstrap";

const EmpListAssignRewards = React.memo(({ empList, handleSelectedEmp }) => {
  return (
    <table cellspacing="0" cellpadding="0" border="0" width="325">
      <tr>
        <td>
          <Table hover style={{ margin: "0px" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
              </tr>
            </thead>
          </Table>
        </td>
      </tr>
      <tr>
        <td>
          <div style={{ width: "500px", height: "180px", overflow: "auto" }}>
            <Table hover>
              <tbody>
                {empList.map((emp) => (
                  <tr
                    key={emp.value.empId}
                    onClick={() => handleSelectedEmp(emp.value)}
                  >
                    <th scope="row">{emp.value.empId}</th>
                    <td>{emp.value.empName}</td>
                  </tr>
                ))}
                {/* <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </td>
      </tr>
    </table>
  );
});

export default EmpListAssignRewards;
