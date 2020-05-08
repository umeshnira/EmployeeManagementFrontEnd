import React, { useState } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";

const designationArr = [
  {
    type1: "Ass. Software Engineer Trainee",
    type2: "manager",
  },
  {
    type1: "Ass. Software Engineer",
    type2: "eng",
  },
  {
    type1: "HR Executive-Trainee",
    type2: "trainee",
  },
  {
    type1: " HR Executive",
    type2: "hr",
  },
  {
    type1: "HR Manager",
    type2: "manager",
  },
  {
    type1: "Lead Engineer",
    type2: "Lead",
  },
  {
    type1: "Managing Director",
    type2: "Dirct",
  },
  {
    type1: " Manager - Sales",
    type2: "sale",
  },
  {
    type1: "Sales Executive",
    type2: "Exc",
  },
  {
    type1: "Software Engineer",
    type2: "eng",
  },
  {
    type1: "Sr. Software Engineer",
    type2: "sr",
  },
  {
    type1: " Sr. Lead Engineer",
    type2: "sr lead",
  },
];

// Data for  list view.
const thead = ["Designation", "Description"];

export default function Designation() {
  const [departmentArr, setDepartmentArray] = useState(designationArr);
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");

  const [selectedDesg, setSelectedDesg] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [desgnationInpuFields, setDesgnationInpuFields] = useState([
    {
      label: "Designation",
      type: "text",
      placeholder: "Enter Designation",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setDesignation(val);
      },
    },
    {
      label: "description",
      type: "text",
      placeholder: "Enter description",
      name: "type2", // this name should be equal to the  array key's name.
      handleOnChange: (val) => {
        setDescription(val);
      },
    },
  ]);

  // Function -------------------
  // on change in text field for updating, then from FormField component
  // onChange call this func and replace the value in selectedData by the key name
  // which we have assigned in the name in inputField state.
  const handleOnchangeToSelectedData = (val, field) => {
    selectedDesg.val[field] = val; // change a particular key in the selected designation.
    // setSelectedDesg(selectedDesg);
  };
  // toggle between the form a grid view and form .

  const toggle = () => {
    // setSelectedDesg({ id: "", val: "" });
    setIsOpenGridView(!isOpenGridView);
    setIsOpenForm(!isOpenForm);
  };
  //  on click the tile open the from with data filed.
  const handleEditDesgnation = (val, id) => {
    setSelectedDesg({ id: id, val: val });
    // toggle();
  };

  const handleDesignationAdd = (e) => {
    e.preventDefault();
    console.log(designation);
    toggle();
  };
  const handleDesignationUpdate = (e) => {
    e.preventDefault();
    console.log(selectedDesg);
    setSelectedDesg({ id: "", val: "" });
    toggle();
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Desigination</h3>
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
        {selectedDesg.id !== "" ? (
          <FromEditFields
            inputFields={desgnationInpuFields}
            handleOnchangeToSelectedData={(val, field) =>
              handleOnchangeToSelectedData(val, field)
            }
            handleSubmit={handleDesignationUpdate}
            formData={selectedDesg}
            button={"Update"}
            toggle={toggle}
          ></FromEditFields>
        ) : (
          <FromFields
            inputFields={desgnationInpuFields}
            handleSubmit={handleDesignationAdd}
            button={"Add"}
            toggle={toggle}
          ></FromFields>
        )}
      </Collapse>
      <Collapse isOpen={isOpenGridView}>
        <GridView
          pagaData={departmentArr}
          isOpenGridView={isOpenGridView}
          emptyFormField={() => setSelectedDesg({ id: "", val: "" })}
          toggle={toggle}
          handleSelectedDesg={(val, id) => handleEditDesgnation(val, id)}
        ></GridView>
      </Collapse>
      <Collapse isOpen={isOpenListView}>
        <ListView
          thead={thead}
          listData={designationArr}
          toggle={() => {
            setIsOpenListView(!isOpenListView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditDesgnation(val, id)}
        ></ListView>
      </Collapse>
    </div>
  );
}
