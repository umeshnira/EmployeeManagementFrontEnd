import React, { useState } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";

const workPrimiseArr = [
  {
    type1: "On site", // work primise
    // type2: "manager",
  },
  {
    type1: "Off Shore", // work primise
  },
  {
    type1: "Contract compnay", // work primise,
  },
];

// Data for  list view.
const thead = ["Work Primise"];

export default function WorkPrimise() {
  const [dataArr, setDataArr] = useState(workPrimiseArr);
  const [workPrimise, setWorkPrimise] = useState("");
  const [description, setDescription] = useState("");

  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [workPrimiseInpuFields, setWorkprimiseInpuFields] = useState([
    {
      label: "Work Primise",
      type: "text",
      placeholder: "Enter Work Primise",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        console.log(val);
        setWorkPrimise(val);
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
    console.log(workPrimise);
    toggle();
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(workPrimise);
    setSelectedData({ id: "", val: "" });
    toggle();
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Work Primise</h3>
        </Col>
        <Col>
          {isOpenGridView ? (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={() => {
                setIsOpenGridView(!isOpenGridView);
                setIsOpenListView(!isOpenListView);
              }}
            >
              <i class="fas   fa-list "></i>
            </Button>
          ) : (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={() => {
                setIsOpenGridView(!isOpenGridView);
                setIsOpenListView(!isOpenListView);
              }}
            >
              <i class="fas fa-th-large float-right "></i>
            </Button>
          )}
        </Col>
      </Row>
      <hr></hr>
      <Collapse isOpen={isOpenForm}>
        {selectedData.id !== "" ? (
          <FromEditFields
            inputFields={workPrimiseInpuFields}
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
            inputFields={workPrimiseInpuFields}
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
