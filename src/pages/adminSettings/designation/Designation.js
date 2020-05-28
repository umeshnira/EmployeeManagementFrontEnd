import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Collapse, Row, Col, Button } from "reactstrap";
import TableWithSortPagtn from "../../../components/common/TableWithSortPagtn";
import {
  GridView,
  FromFields,
  FromEditFields,
  useDesignationTableEle,
} from "../../../components/adminSettings/index";
import {
  getDesignation,
  addDesignation,
  updateDesignation,
  delDesignation,
} from "../../../redux/actions/adminSettings/adminSettings.action";

// Data for  list view.
const thead = ["Designation", "Description"];

const Designation = (props) => {
  const {
    getDesignation,
    updateDesignation,
    addDesignation,
    delDesignation,
  } = props;
  const { desiginations } = props.desiginations;

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
      name: "designation", // this name should be equal to the data array key's.
      handleOnChange: (val) => {
        setDesignation(val);
      },
    },
    {
      label: "description",
      type: "text",
      placeholder: "Enter description",
      name: "description", // this name should be equal to the data array key's name.
      handleOnChange: (val) => {
        setDescription(val);
      },
    },
    {
      label: "description",
      type: "select",
      option: ["HR", "DEV", "CEO"],
      name: "description", // this name should be equal to the data array key's name.
      handleOnChange: (val) => {
        setDescription(val);
      },
    },
  ]);

  // custome hooks.
  const { trow } = useDesignationTableEle(thead, desiginations);

  // call the designation data
  useEffect(() => {
    getDesignation();
  }, [getDesignation]);

  // to set the designation data from reducer.
  useEffect(() => {
    setDepartmentArray(desiginations);
  }, [desiginations]);

  // Function -------------------
  // on change in text field for updating, then from FormField component
  // onChange call this func and replace the value in selectedData by the key name
  // which we have assigned in the name in inputField state.
  const handleOnchangeToSelectedData = (val, field) => {
    let tempObj = selectedDesg; // for not mutating reducer state.
    tempObj.val[field] = val;
    setSelectedDesg(tempObj);
    // change a particular key in the selected designation.
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
    let formData = {
      desigination: designation,
      description: description,
    };
    addDesignation(formData);
    toggle();
  };
  const handleDesignationUpdate = (e) => {
    e.preventDefault();
    updateDesignation(selectedDesg);
    setSelectedDesg({ id: "", val: "" });
    toggle();
  };
  // delete  designation.
  const handleDelDesignation = React.useCallback(
    (delId) => {
      delDesignation(delId);
    },
    [delDesignation]
  );

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
          handleDelDesignation={handleDelDesignation}
          toggle={toggle}
          handleSelectedDesg={(val, id) => handleEditDesgnation(val, id)}
        ></GridView>
      </Collapse>
      <Collapse isOpen={isOpenListView}>
        <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
      </Collapse>
    </div>
  );
};

Designation.prototype = {
  getDesignation: PropTypes.func,
  addDesignation: PropTypes.func,
  updateDesignation: PropTypes.func,
  delDesignation: PropTypes.func,
};

const mapStateToProps = (state) => ({
  desiginations: state.adminSettingReducer,
});

export default connect(mapStateToProps, {
  getDesignation,
  addDesignation,
  updateDesignation,
  delDesignation,
})(Designation);
