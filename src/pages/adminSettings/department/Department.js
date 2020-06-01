import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container, Card, Collapse, Button } from "reactstrap";
import Form from "./Form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getDepartment,
  addDepartment,
  updateDepartment,
  delDepartment,
} from "../../../redux/actions/adminSettings/adminSettings.action";
import TableWithSortPagtn from "../../../components/common/TableWithSortPagtn";
import {
  GridView,
  FromFields,
  FromEditFields,
  useDesignationTableEle,
} from "../../../components/adminSettings/index";

// Data for  list view.
const thead = ["departmentName"];

const Department = (props) => {
  const {
    getDepartment,
    addDepartment,
    updateDepartment,
    delDepartment,
  } = props;
  const { departments } = props.departments;

  const [department, setDepartment] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);

  const [selectedDept, setSelectedDept] = useState({ id: "", val: "" });
  const [departmentArray, setDepartmentArray] = useState([]);
  const [departmentInputFields,setDepartmentInputFields] = useState([]);

    // custome hooks.
    const { trow } = useDesignationTableEle(thead, departmentArray);

 // call the department data
 useEffect(() => {
  getDepartment();
}, [getDepartment]);

// to set the designation data from reducer.
useEffect(() => {
  console.log(departments);
  setDepartmentArray(departments);
  setDepartmentInputFields([
    {
      label: "Department Name",
      type: "text",
      placeholder: "Enter Department Name",
      name: "departmentName", // this name should be equal to the data array key's.
      handleOnChange: (val) => {
        setDepartment(val);
      },
    }
  ]);
}, [departments]);

// Function -------------------
  // on change in text field for updating, then from FormField component
  // onChange call this func and replace the value in selectedData by the key name
  // which we have assigned in the name in inputField state.
  const handleOnchangeToSelectedData = (val, field) => {
    let tempObj = selectedDept; // for not mutating reducer state.
    tempObj.val[field] = val;
    setSelectedDept(tempObj);
    // change a particular key in the selected designation.
  };

// toggle between the form a grid view and form .
const toggle = () => {
  // setSelectedDesg({ id: "", val: "" });
  setIsOpenGridView(!isOpenGridView);
  setIsOpenForm(!isOpenForm);
};

 //  on click the tile open the from with data filed.
 const handleEditDepartment = (val, id) => {
  setSelectedDept({ id: id, val: val });
  // toggle();
};

  //   setFormData(formData);
  // };

  const handleAddDepartment = (e) => {
    e.preventDefault();
    let formData = {
      department: department,
    };
    addDepartment(formData);
    toggle();
  };

  const handleUpdateDepartment = (e) => {
    e.preventDefault();
    updateDepartment(selectedDept);
    setSelectedDept({ id: "", val: "" });
    toggle();
  };
  // delete  designation.
  const handleDelDepartment = React.useCallback(
    (departmentlId) => {
      delDepartment(departmentlId);
      console.log("del dept");
    },
    [delDepartment]
  );

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h3>Department</h3>
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
              <i className="fas   fa-list "></i>
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
        {selectedDept.id !== "" ? (
          <FromEditFields
            inputFields={departmentInputFields}
            handleOnchangeToSelectedData={(val, field) =>
              handleOnchangeToSelectedData(val, field)
            }
            handleSubmit={handleUpdateDepartment}
            formData={selectedDept}
            button={"Update"}
            toggle={toggle}
          ></FromEditFields>
        ) : (
          <FromFields
            inputFields={departmentInputFields}
            handleSubmit={handleAddDepartment}
            button={"Add"}
            toggle={toggle}
          ></FromFields>
        )}
      </Collapse>
      <Collapse isOpen={isOpenGridView}>
        <GridView
          pagaData={departmentArray}
          displayData={{heading: "departmentName", id: "departmentId"}}
          isOpenGridView={isOpenGridView}
          emptyFormField={() => setSelectedDept({ id: "", val: "" })}
          handleDel={handleDelDepartment}
          toggle={toggle}
          handleSelectedDepartment={(val,id) => handleEditDepartment(val,id)}
        ></GridView>
      </Collapse>
      <Collapse isOpen={isOpenListView}>
        <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
      </Collapse>
      </Container>
    </Fragment>
  );
}

Department.prototype = {
  getDepartment: PropTypes.func,
  addDepartment: PropTypes.func,
  updateDepartment: PropTypes.func,
  delDepartment: PropTypes.func,
};

const mapStateToProps = (state) => ({
  departments: state.adminSettingReducer,
});

export default connect(mapStateToProps, {
  getDepartment,
  addDepartment,
  updateDepartment,
  delDepartment,
})(Department);