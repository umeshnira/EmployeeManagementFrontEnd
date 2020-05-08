import React, { useState } from "react";
import { Collapse, Row, Col, Button, Label, Input } from "reactstrap";
import {
  ListView,
  FormAddHolidayCalender,
  FormEditHolidayCalender,
} from "../../../components/adminSettings/index";
let dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const holidayCalenderArr = [
  {
    type1: "New Year", // Event ( this are the filed data in DB)
    type2: "2019-jan-01", // Date
    type3: "Thuesday", // Day
    type4: "Optinal Holiday (OH)", // Type
  },
  {
    type1: "Republic Day", // Event ( this are the filed data in DB)
    type2: "2020-jan-26", // Date
    type3: "Saturday", // Day
    type4: "", // Type
  },
  {
    type1: "Attukal Pongala", // Event ( this are the filed data in DB)
    type2: "2018-Feb-20", // Date
    type3: "Wednesday", // Day
    type4: "Optinal Holiday (OH)", // Type
  },
];

// Data for  list view.
const thead = ["Event", "Date", "Day", "Type"];

export default function HolidayCalender() {
  const [dataArr, setDataArr] = useState(holidayCalenderArr);
  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [event, setEvent] = useState("");
  const [type, setType] = useState("");

  const [calenderDate, setCalenderDate] = useState({});

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenListView, setIsOpenListView] = useState(true);
  // input fileds.
  const [holidayCalenderInpuFields, setHolidayCalenderInpuFields] = useState([
    {
      label: "Event/Title",
      type: "text",
      placeholder: "Enter Event",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setEvent(val);
      },
    },
    {
      label: "Type",
      type: "text",
      placeholder: "Enter Type of holiday",
      name: "type4", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setType(val);
      },
    },
  ]);

  //   Fucntion --------------------------
  //   onchange the year on the select box.
  const handleYearChange = (year) => {
    // console.log(year);
    if (year !== "") {
      let filterArr = holidayCalenderArr.filter((ele) => {
        let date = new Date(ele.type2);
        console.log(date.getFullYear());

        return date.getFullYear() == year;
      });

      console.log(filterArr);
      setDataArr(filterArr);
    } else {
      setDataArr(holidayCalenderArr);
    }
  };
  // onchange calender date.
  const handleOnchangeDate = (date) => {
    setCalenderDate({
      date: date.getDate(),
      day: dayArr[date.getDay()],
      year: date.getFullYear(),
    });
  };

  //  on click the tile ,open the from with data filed.
  const handleEditClick = (val, id) => {
    setSelectedData({ id: id, val: val });
  };

  const handleDataAdd = (e) => {
    e.preventDefault();
    console.log(event);
    console.log(type);
    console.log(calenderDate);
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(event);
    console.log(type);
    console.log(calenderDate);
  };

  return (
    <div>
      <Row>
        <Col sm={8} xs={4}>
          <h3>Holiday Calender</h3>
        </Col>
        <Col sm={3} xs={4} className="">
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(e) => handleYearChange(e.target.value)}
          >
            <option value={""}>All</option>
            <option value={"2020"}>2020</option>
            <option value={"2019"}>2019</option>
            <option value={"2018"}>2018</option>
          </Input>
        </Col>
        <Col sm={1} xs={4}>
          <Button
            color=""
            className="btn-admin-settings float-right"
            onClick={() => {
              setIsOpenListView(!isOpenListView);
              setIsOpenForm(!isOpenForm);
              setSelectedData({ id: "", val: "" });
            }}
          >
            <i class="fas fa-plus "></i>
          </Button>
        </Col>
      </Row>
      <hr></hr>
      <Collapse isOpen={isOpenForm}>
        {selectedData.id !== "" ? (
          <FormEditHolidayCalender
            inputFields={holidayCalenderInpuFields}
            handleSubmit={handleDataUpdate}
            button={"Update"}
            calenderDate={calenderDate}
            formData={selectedData}
            toggle={() => {
              setIsOpenListView(!isOpenListView);
              setIsOpenForm(!isOpenForm);
            }}
            handleOnchangeDate={(date) => handleOnchangeDate(date)}
          ></FormEditHolidayCalender>
        ) : (
          <FormAddHolidayCalender
            inputFields={holidayCalenderInpuFields}
            handleSubmit={handleDataAdd}
            button={"Add"}
            calenderDate={calenderDate}
            toggle={() => {
              setIsOpenListView(!isOpenListView);
              setIsOpenForm(!isOpenForm);
            }}
            handleOnchangeDate={(date) => handleOnchangeDate(date)}
          ></FormAddHolidayCalender>
        )}
      </Collapse>

      <Collapse isOpen={isOpenListView}>
        <ListView
          thead={thead}
          listData={dataArr}
          toggle={() => {
            setIsOpenListView(!isOpenListView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditClick(val, id)}
        ></ListView>
      </Collapse>
    </div>
  );
}
