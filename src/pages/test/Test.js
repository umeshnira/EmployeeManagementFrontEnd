import React, { useState, useEffect } from "react";
import "../../style/weeklyCalendar.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Test = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  // const [month, setMonth] = useState(new Date().getMonth());
  // const [date, setDate] = useState(new Date().getDate());
  // let dayIndex = new Date().getDay(); //index.

  let dayIndex = 6; //index.
  const [month, setMonth] = useState(4);
  const [date, setDate] = useState(2);

  const [lastDateOfMonth, setLastDateOfMonth] = useState(
    new Date(year, month + 1, 0).getDate()
  );

  console.log(monthNames[month]);

  useEffect(() => {
    currentWeekDates();
    setMonth(4);
    setLastDateOfMonth(new Date(year, month + 1, 0).getDate());
  }, []);

  const currentWeekDates = React.useCallback(() => {
    let weekDates = [];
    let prevDate = 0;

    let rightIndex = 7 - dayIndex;
    let leftIndex = dayIndex; // copied the orginal value
    let leftArr = calcPrevDates(date, leftIndex);

    // date-1 cuz in calcNextDates i = 1 ; i <= limit.
    let righrArr = calcNextDates(date - 1, rightIndex);
    weekDates = [...leftArr, ...righrArr];
    setWeekDates(weekDates);
  }, []);

  const previous = () => {
    console.log(lastDateOfMonth, monthNames[month]);

    let prevArr = weekDates;
    let startDate = prevArr[0];
    let tempArr = weekDates.includes(1);
    console.log(tempArr);
    if (tempArr) {
      setMonth((prevState) => prevState - 1);
    }
    const resPrvDates = calcPrevDates(startDate, 7);

    setWeekDates(resPrvDates);
  };

  const next = () => {
    console.log(lastDateOfMonth, monthNames[month]);
    let nextArr = weekDates;
    let endDate = nextArr[6];

    const resNextDates = calcNextDates(endDate, 7);
    setWeekDates(resNextDates);
  };

  const calcPrevDates = React.useCallback(
    (startDate, limit) => {
      console.log(weekDates);

      let prevDates = startDate;
      let monthOverFlow = false;
      let tempMonthOverFlowArr = [];
      let prevDatesArr = [];

      for (let i = 1; i <= limit; i++) {
        if (prevDates <= 1) {
          // change month last prev month.
          let monthChange = month - 1;
          setMonth(monthChange);
          // get month last date.
          setLastDateOfMonth(new Date(year, month, 0).getDate());
          // lastDateOfMonth = new Date(year, month, 0).getDate();
          startDate = new Date(year, month, 0).getDate();
          monthOverFlow = true;
        }
        if (monthOverFlow) {
          prevDates = startDate - (limit - i);
          tempMonthOverFlowArr.push(prevDates);
        } else {
          prevDates = startDate - i;
          prevDatesArr.push(prevDates);
        }
      }
      prevDatesArr.reverse();
      prevDatesArr = [...tempMonthOverFlowArr, ...prevDatesArr];
      console.log(lastDateOfMonth);

      return prevDatesArr;
    },
    [lastDateOfMonth, year, month, weekDates]
  );

  const calcNextDates = React.useCallback(
    (endDate, limit) => {
      console.log(lastDateOfMonth);
      let nextDates = endDate;
      let nextDatesArr = [];
      let monthOverFlow = false;
      let tempMonthOverFlowArr = [];
      for (let i = 1; i <= limit; i++) {
        if (nextDates >= lastDateOfMonth) {
          // change to starting date.

          setMonth((prevState) => prevState + 1);
          // get new month last date.
          setLastDateOfMonth(new Date(year, month, 0).getDate());

          // lastDateOfMonth = new Date(year, month, 0).getDate();
          endDate = 1;
          monthOverFlow = true;
        }
        if (monthOverFlow) {
          nextDates = endDate + (limit - i);
          tempMonthOverFlowArr.push(nextDates);
        } else {
          nextDates = endDate + i;
          nextDatesArr.push(nextDates);
        }
      }
      tempMonthOverFlowArr.reverse();
      nextDatesArr = [...nextDatesArr, ...tempMonthOverFlowArr];
      return nextDatesArr;
    },
    [lastDateOfMonth, year, month]
  );

  return (
    <>
      {/* <Container> */}
      <div className="calendar-weekly">
        <div className="w-100 d-flex top">
          <div
            className="w-30  left-nav"
            style={{ width: "30%" }}
            onClick={previous}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="text-center month" style={{ width: "40%" }}>
            {monthNames[month]} 2020
          </div>
          <div
            className="text-right right-nav"
            style={{ width: "30%" }}
            onClick={next}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="day w-100 ">
          <span className="">sun</span>

          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fir</span>
          <span className="">Sat</span>
        </div>
        <div className="line"></div>
        <div className="date w-100 ">
          <span className>{weekDates[0]}</span>
          <span>{weekDates[1]}</span>
          <span>{weekDates[2]}</span>
          <span>{weekDates[3]}</span>
          <span>{weekDates[4]}</span>
          <span>{weekDates[5]}</span>
          <span>{weekDates[6]}</span>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Test;
