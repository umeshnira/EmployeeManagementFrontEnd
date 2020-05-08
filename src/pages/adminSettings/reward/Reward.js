import React, { useState } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";

const rewardArr = [
  {
    type1: "Reward 1 Description", // Reward Description data
    type2: "10", //Reward point data
  },
  {
    type1: "Reward 2 Description", // Reward Description data
    type2: "20", //Reward point data
  },
  {
    type1: "Reward 3 Description", // Reward Description data
    type2: "30", //Reward point data
  },
  {
    type1: "Reward 4 Description", // Reward Description data
    type2: "40", //Reward point data
  },
];

// Data for  list view.
const thead = ["Reward Desc", "Reward Point"];

export default function Reward() {
  const [dataArr, setDataArr] = useState(rewardArr);
  const [rewardDescription, setRewardDescription] = useState("");
  const [rewardPoint, setRewardPoint] = useState("");

  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  // input fileds.
  const [employeeTypeInpuFields, setEmployeeTypeInpuFields] = useState([
    {
      label: "Reward Description",
      type: "text",
      placeholder: "Enter Reward Description",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setRewardDescription(val);
      },
    },
    {
      label: "Reward Point",
      type: "text",
      placeholder: "Enter Reward Point",
      name: "type2", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setRewardPoint(val);
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

  const handleDataAdd = (e) => {
    e.preventDefault();
    console.log(rewardDescription);
    console.log(rewardPoint);

    toggle();
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(rewardDescription);
    console.log(rewardPoint);
    setSelectedData({ id: "", val: "" });
    toggle();
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Empolyee Type</h3>
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
        ></ListView>
      </Collapse>
    </div>
  );
}
