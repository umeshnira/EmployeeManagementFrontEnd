import React, { useState, useEffect } from "react";
import { Collapse, Row, Col, Button } from "reactstrap";
import TableWithSortPagtn from "../../../components/common/TableWithSortPagtn";
import {
  GridView,
  FromFields,
  FromEditFields,
  useDesignationTableEle,
} from "../../../components/adminSettings/index";

const designationDate = [
  {
    designation: "Ass. Software Engineer Trainee",
    description: "manager",
  },
  {
    designation: "Ass. Software Engineer",
    description: "eng",
  },
  {
    designation: "HR Executive-Trainee",
    description: "trainee",
  },
  {
    designation: " HR Executive",
    description: "hr",
  },
  {
    designation: "HR Manager",
    description: "manager",
  },
  {
    designation: "Lead Engineer",
    description: "Lead",
  },
  {
    designation: "Managing Director",
    description: "Dirct",
  },
  {
    designation: " Manager - Sales",
    description: "sale",
  },
  {
    designation: "Sales Executive",
    description: "Exc",
  },
  {
    designation: "Software Engineer",
    description: "eng",
  },
  {
    designation: "Sr. Software Engineer",
    description: "sr",
  },
  {
    designation: " Sr. Lead Engineer",
    description: "sr lead",
  },
];

// Data for  list view.
const thead = ["Designation", "Description"];

export default function Designation() {
  const [designationArr, setDepartmentArray] = useState([]);
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");

  const [selectedDesg, setSelectedDesg] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [desgnationInpuFields] = useState([
    {
      label: "Designation",
      type: "text",
      placeholder: "Enter Designation",
      name: "designation", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setDesignation(val);
      },
    },
    {
      label: "description",
      type: "text",
      placeholder: "Enter description",
      name: "designationDescp", // this name should be equal to the  array key's name.
      handleOnChange: (val) => {
        setDescription(val);
      },
    },
  ]);

  // custome hooks.
  const { trow } = useDesignationTableEle(thead, designationDate);

  useEffect(() => {
    setDepartmentArray(designationDate);
  }, []);

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
    toggle();
    console.log(description);
    console.log(designation);
  };
  const handleDesignationUpdate = (e) => {
    e.preventDefault();
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
          pagaData={designationArr}
          isOpenGridView={isOpenGridView}
          emptyFormField={() => setSelectedDesg({ id: "", val: "" })}
          toggle={toggle}
          handleSelectedDesg={(val, id) => handleEditDesgnation(val, id)}
        ></GridView>
      </Collapse>
      <Collapse isOpen={isOpenListView}>
        <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
      </Collapse>
    </div>
  );
}
