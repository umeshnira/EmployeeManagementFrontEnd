import React, { useState, useEffect } from "react";
import {
  TopRowPLReport,
  TablePLReport,
  TableSplitUpDetails,
} from "../../components/payRoll/index";
import { empList } from "../../datas/employee";
import { employeePlList } from "../../datas/payroll";

const PLReport = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [isShowSplitUpGrid, setIsShowSlitUpGrid] = useState(false);
  const [
    selectedEmployeeToShowSplitUp,
    setSelectedEmployeeToShowSplitUp,
  ] = useState(0);

  useEffect(() => {
    setEmployeeList(empList);
  }, [empList]);

  //   Function.
  // when click on split up button in TablePLReport.
  const handleOnClickSpliUpBtn = React.useCallback((employeeId) => {
    setSelectedEmployeeToShowSplitUp(employeeId);
    toggleSplitUpGrid();
  }, []);

  //   toggele Split Up grid.
  const toggleSplitUpGrid = React.useCallback(() => {
    setIsShowSlitUpGrid((prevState) => !prevState);
  }, []);

  return (
    <>
      <TopRowPLReport isShowSplitUpGrid={isShowSplitUpGrid}></TopRowPLReport>
      {!isShowSplitUpGrid && (
        <TablePLReport
          employeeList={employeeList}
          handleOnClickSpliUpBtn={handleOnClickSpliUpBtn}
        ></TablePLReport>
      )}

      {isShowSplitUpGrid && (
        <TableSplitUpDetails
          employeeId={selectedEmployeeToShowSplitUp}
          employeePlList={employeePlList}
          toggleSplitUpGrid={toggleSplitUpGrid}
        ></TableSplitUpDetails>
      )}
    </>
  );
};

export default PLReport;
