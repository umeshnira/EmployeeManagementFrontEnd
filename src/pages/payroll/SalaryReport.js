import React, { useState, useEffect, useRef } from "react";
import {
  TableSalaryReport,
  TopRowSalaryReport,
} from "../../components/payRoll/index";
import { empList } from "../../datas/employee";

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
const SalaryReport = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(new Date().getMonth() + 1)
  );
  const toKnowDateFilterChanged = useRef(false);

  useEffect(() => {
    //   when data from DB, give dependencies.
    setEmployeeList(empList);
  }, []);

  // Function.
  //   to set statrt date.
  const handleChangeFromMonth = React.useCallback(
    (startMonth) => {
      setStartDate(startMonth);
      let tempArr = handleDateFilter(startMonth, endDate);
      setEmployeeList(tempArr);
    },
    [endDate]
  );

  //   to set end date.
  const handleChangeEndMonth = React.useCallback(
    (endMonth) => {
      setEndDate(endMonth);
      let tempArr = handleDateFilter(startDate, endMonth);
      setEmployeeList(tempArr);
    },
    [startDate]
  );

  //   to handle search on entry in input field.
  const handleEmployeeSearch = React.useCallback(
    (val) => {
      let tempArr = [];
      if (toKnowDateFilterChanged.current) {
        tempArr = handleDateFilter(startDate, endDate);
      } else {
        tempArr = empList;
      }

      let temSearchArr = tempArr.filter(
        (el) =>
          el.value.empName.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
          String(el.value.empId).toLowerCase().indexOf(val.toLowerCase()) !== -1
      );
      setEmployeeList(temSearchArr);
    },
    [startDate, endDate]
  );

  //   to filter search based on from and to date.
  const handleDateFilter = React.useCallback((startDate, endDate) => {
    let tempArr = empList.filter(
      (el) =>
        el.value.salaryDate.getMonth() >= startDate.getMonth() &&
        el.value.salaryDate.getMonth() <= new Date(endDate).getMonth()
    );
    toKnowDateFilterChanged.current = true;
    return tempArr;
  }, []);

  return (
    <>
      <TopRowSalaryReport
        date={{ startDate, endDate }}
        handleChangeFromMonth={handleChangeFromMonth}
        handleChangeEndMonth={handleChangeEndMonth}
        handleEmployeeSearch={handleEmployeeSearch}
      ></TopRowSalaryReport>
      <TableSalaryReport empList={employeeList}></TableSalaryReport>
    </>
  );
};

export default SalaryReport;
