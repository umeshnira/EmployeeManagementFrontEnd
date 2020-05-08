import React, { useState } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";

// Data for  list view.
const thead = ["Designation", "Description"];

export default function Suspense(props) {
  const [departmentArr, setDepartmentArray] = useState(props.designationArr);
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
          listData={departmentArr}
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
