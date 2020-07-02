import React, { useState, useEffect, useRef } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";
import useFormValidation from "../../../components/common/useFormValidation";

const employeeArr = [
  {
    employeeType: "Contract", // Employee Type
    // type2: "manager",
  },
  {
    employeeType: "Permanent", //  Employee Type
  },
  {
    employeeType: "Part Time", //  Employee Type
  },
  {
    employeeType: "Resigned", //  Employee Type
  },
];

// Data for  list view.
const thead = [" Employee Type"];

export default function EmployeeType() {
  const [dataArr] = useState(employeeArr);
  const [employeeType, setEmployeeType] = useState("");
  const [selectedData, setSelectedData] = useState({ id: "", val: "" });
  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [employeeTypeInpuFields] = useState([
    {
      label: "Employee Type",
      type: "text",
      placeholder: "Enter Employee Type",
      name: "employeeType", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setEmployeeType(val);
      },
    },
  ]);
  const [formValidationState, setFormValidationState] = useState({});
  const callValidation = useRef(false);

  // custom hook.
  const { formValidation, isFormValid } = useFormValidation(
    formValidationState
  );

  useEffect(() => {
    console.log("in change useEffect");
    callValidation.current && callBackAfterValidation();
  }, [formValidation]);

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
    console.log(employeeType);
    toggle();
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(employeeType);
    setSelectedData({ id: "", val: "" });
    toggle();
  };

  const formValidationOnSubmitAdd = () => {
    let formValidationList = {
      // key name should be same as the input field name.
      employeeType: {
        required: true,
        isValid: true,
        value: "",
        errorMessage: "",
      },
    };
    setFormValidationState(formValidationList); //this set call the custom hook useFormValidation.
    callValidation.current = true;
  };

  const formValidationOnSubmitUpdate = () => {
    let formValidationList = {
      // key name should be same as the input field name.
      employeeType: {
        required: true,
        isValid: true,
        value: selectedData.val.employeeType,
        errorMessage: "",
      },
    };
    setFormValidationState(formValidationList); //this set call the custom hook useFormValidation.
    callValidation.current = true;
  };
  const callBackAfterValidation = () => {
    console.log("formValidation:", isFormValid);
    if (isFormValid) {
      // if form valid.
      if (selectedData.id !== "") {
        // update
        console.log("updated", employeeType);
        setSelectedData({ id: "", val: "" });
        toggle();
      } else {
        // add
        console.log("add", employeeType);
        toggle();
      }
    }
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
            // handleSubmit={handleDataUpdate}
            handleSubmit={formValidationOnSubmitUpdate}
            formValidation={formValidation}
            formData={selectedData}
            button={"Update"}
            toggle={toggle}
          ></FromEditFields>
        ) : (
          <FromFields
            inputFields={employeeTypeInpuFields}
            // handleSubmit={handleDataAdd}
            handleSubmit={formValidationOnSubmitAdd}
            formValidation={formValidation}
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
