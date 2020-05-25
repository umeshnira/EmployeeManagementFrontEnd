import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const useTableProcessRewards = (toProcessRewards) => {
  const [trow, setTrow] = useState([]);
  const [thead] = useState([
    "Id",
    "Name",
    "Redeem Points",
    "Redeem Date",
    "Action",
  ]);

  useEffect(() => {
    let trow = toProcessRewards.map((el, i) => {
      return {
        Id: <div>{el.empId}</div>,
        Name: (
          <h2 class="table-avatar">
            <img
              class="profile-img-table"
              alt=""
              src={require(`../../img/employee/${el.empProfileImg}`)}
            />
            <span className="ml-2">
              <span style={{ fontWeight: "400", color: "black" }}>
                {el.empName}
              </span>
              <span> {el.empDesignation}</span>
            </span>
          </h2>
        ),
        "Redeem Points": <div>{el.redeemPoints}</div>,
        "Redeem Date": <div>{el.redeemDate}</div>,
        Action: (
          <Button color="danger" outline>
            Process
          </Button>
        ),
      };
    });
    setTrow(trow);
  }, [toProcessRewards]);

  return { thead, trow };
};

export default useTableProcessRewards;
