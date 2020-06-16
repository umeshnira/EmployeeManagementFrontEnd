import React, { useState, useEffect, Fragment } from "react";

const useHolidayCalendarTable = (
    holidayCalendarData,
    handleDelHolidayCalendar,
    handleEditHolidayCalendar,
    onClickToggleFromTable
) => {
  const [thead] = useState(["Year","Title","Date","Day","Type","Action"]);
  const [trow, setTrow] = useState([]);

  useEffect(() => {
    let trowArr = holidayCalendarData.map((el) => {
      return {
        // "Policy Name": el.policyName,
        // "Description": el.description,
        // "Department": el.departmentName,
        Action: (
          <Fragment>
            <i
              className="fas fa-trash"
              onClick={() => handleDelHolidayCalendar(el.holidayCalendarId)}
            ></i>
            <i
              className="fas fa-edit ml-4"              
              onClick={() => {
                handleEditHolidayCalendar(el, el.holidayCalendarId);
                onClickToggleFromTable();
             }}
            ></i>
          </Fragment>
        ),
      };
    });

     setTrow(trowArr);
  }, [
    // holidayCalendarData,
    // handleDelHolidayCalendar,
    // handleEditHolidayCalendar,
    onClickToggleFromTable
  ]);

  return { thead, trow };
};

export default useHolidayCalendarTable;