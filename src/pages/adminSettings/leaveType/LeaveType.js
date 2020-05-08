import React, { useState } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";

const leaveTypeArr = [
  {
    type1: "Casual Leave", // leave type
    type2: "24", //No of Leaves Per year
    type3: "10", //No of Leaves carry forwarded
    type4: "18", //No of apply per year
    type5: "active", // status
  },
  {
    type1: "Medical Leave", // leave type
    type2: "14", //No of Leaves Per year
    type3: "0", //No of Leaves carry forwarded
    type4: "10", //No of apply per year
    type5: "active", // status
  },
  {
    type1: "Loss of Pay", // leave type
    type2: "30", //No of Leaves Per year
    type3: "10", //No of Leaves carry forwarded
    type4: "20", //No of apply per year
    type5: "inactive", // status
  },
];

// Data for  list view.
const thead = [
  "Leave Type",
  "No of Leaves Per year",
  "No of Leaves carry forwarded",
  "No of Leave apply per year",
];

export default function LeaveType() {
  const [dataArr, setDataArr] = useState(leaveTypeArr);
  const [leaveType, setLeaveType] = useState("");
  const [leavePerYear, setLeavePerYear] = useState("");
  const [leaveCarryForwarded, setLeaveCarryForwarded] = useState("");
  const [leaveAppyPerYear, setLeaveAppyPerYear] = useState("");

  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  // input fileds.
  const [employeeTypeInpuFields, setEmployeeTypeInpuFields] = useState([
    {
      label: "Leave Type",
      type: "text",
      placeholder: "Enter Leave Type",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setLeaveType(val);
      },
    },
    {
      label: "No of Leaves Per Year",
      type: "text",
      placeholder: "Enter No of Leaves Per year",
      name: "type2", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setLeavePerYear(val);
      },
    },
    {
      label: "No of Leaves Carry Forwarded",
      type: "text",
      placeholder: "Enter No of Leaves Carry Forwarded",
      name: "type3", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setLeaveCarryForwarded(val);
      },
    },
    {
      label: "No of Leave Apply Per Year",
      type: "text",
      placeholder: "Enter No of Leave Apply Per Year",
      name: "type4", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setLeaveAppyPerYear(val);
      },
    },
  ]);

  // Function -------------------
  // on change in text field for updating, then from FormField component
  // onChange call this func and replace the value in selectedData by the key name
  // which we have assigned in the name in inputField state.
  const handleOnchangeToSelectedData = (val, field) => {
    selectedData.val[field] = val; // change a particular key in the selected designation.
    // setSelectedDesg(selectedDesg);
  };
  // toggle between the form a grid view and form .

  const toggle = () => {
    // setSelectedDesg({ id: "", val: "" });
    setIsOpenGridView(!isOpenGridView);
    setIsOpenForm(!isOpenForm);
  };
  //  on click the tile ,open the from with data filed.
  const handleEditClick = (val, id) => {
    setSelectedData({ id: id, val: val });
    // toggle();
  };

  // handle the dropdown change in list view.
  const handleDropDownBtnOnChange = (val) => {
    console.log(val);
  };

  const handleDataAdd = (e) => {
    e.preventDefault();
    console.log(leaveType);
    console.log(leavePerYear);
    console.log(leaveCarryForwarded);
    console.log(leaveAppyPerYear);

    toggle();
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(leaveType);
    console.log(leavePerYear);
    console.log(leaveCarryForwarded);
    console.log(leaveAppyPerYear);
    setSelectedData({ id: "", val: "" });
    toggle();
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Leave Type</h3>
        </Col>
        <Col>
          {isOpenGridView ? (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={() => {
                setIsOpenGridView(false);
                setIsOpenListView(true);
                setIsOpenForm(false);
              }}
            >
              <i className="fas fa-list"></i>
            </Button>
          ) : (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={() => {
                setIsOpenGridView(true);
                setIsOpenListView(false);
                setIsOpenForm(false);
              }}
            >
              <i className="fas fa-th-large float-right "></i>
            </Button>
          )}
        </Col>
      </Row>
      <hr></hr>
      <Collapse isOpen={isOpenForm}>
        {selectedData.id !== "" ? (
          <FromEditFields
            inputFields={employeeTypeInpuFields}
            handleOnchangeToSelectedData={(val, field) =>
              handleOnchangeToSelectedData(val, field)
            }
            handleSubmit={handleDataUpdate}
            formData={selectedData}
            button={"Update"}
            toggle={toggle}
          ></FromEditFields>
        ) : (
          <FromFields
            inputFields={employeeTypeInpuFields}
            handleSubmit={handleDataAdd}
            button={"Add"}
            toggle={toggle}
          ></FromFields>
        )}
      </Collapse>
      <Collapse isOpen={isOpenGridView}>
        <GridView
          pagaData={dataArr}
          isOpenGridView={isOpenGridView}
          emptyFormField={() => setSelectedData({ id: "", val: "" })}
          toggle={() => {
            setIsOpenGridView(!isOpenGridView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditClick(val, id)}
        ></GridView>
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
          dropDownThead={"Status"}
          handleDropDownOnChange={(val) => handleDropDownBtnOnChange(val)}
          dropDownOption={[
            {
              icon: <i class="far fa-dot-circle text-success"></i>,
              option: "Active",
            },
            {
              icon: <i class="far fa-dot-circle text-danger"></i>,
              option: "Inactive",
            },
          ]}
        ></ListView>
      </Collapse>
    </div>
  );
}
