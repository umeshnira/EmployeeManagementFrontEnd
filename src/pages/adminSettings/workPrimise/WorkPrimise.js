import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  ListView,
  FromFields,
  FromEditFields,
} from "../../../components/adminSettings/index";
import {
  getWorkPrimise,
  addWOrkPrimise,
} from "../../../redux/actions/adminSettings/adminSettings.action";

// Data for  list view.
const thead = ["work Premise"]; // thead element names should === data key value.

const WorkPrimise = (props) => {
  const { getWorkPrimise, addWOrkPrimise } = props;
  const { workPrimisesList } = props.workPrimisesList;
  const [dataArr, setDataArr] = useState([]);
  const [workPrimise, setWorkPrimise] = useState("");

  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [workPrimiseInpuFields] = useState([
    {
      label: "Work Premise",
      type: "text",
      placeholder: "Enter Work Premise",
      name: "workPremise", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setWorkPrimise(val);
      },
    },
  ]);

  useEffect(() => {
    getWorkPrimise();
  }, [getWorkPrimise]);

  useEffect(() => {
    console.log("change");
    setDataArr(workPrimisesList);
  }, [workPrimisesList]);

  // Function -------------------
  // on change in text field for updating, then from FormField component
  // onChange call this func and replace the value in selectedData by the key name
  // which we have assigned in the name in inputField state.
  const handleOnchangeToSelectedData = (val, field) => {
    // let tempObj = selectedData; // for not mutating reducer state.
    // tempObj.val[field] = val;
    // console.log(selectedData);
    // setSelectedData(tempObj);
    let tempObj = { id: selectedData.id, val: {} };
    Object.keys(selectedData.val).map((key) =>
      key === field
        ? (tempObj.val[key] = val)
        : (tempObj.val[key] = selectedData.val[key])
    );
    setSelectedData(tempObj);
  };
  // toggle between the form a grid view and form .

  const toggle = () => {
    // setSelectedData({ id: "", val: "" });
    setIsOpenGridView(!isOpenGridView);
    setIsOpenForm(!isOpenForm);
    // setSelectedData({})
  };
  //  on click the tile ,open the from with data filed.
  const handleEditClick = (val, id) => {
    setSelectedData({ id: id, val: val });
    // toggle();
  };

  const handleDataAdd = (e) => {
    e.preventDefault();
    console.log(workPrimise);
    let formData = {
      WorkingPremiseType: workPrimise,
      description: "",
    };
    addWOrkPrimise(formData);
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
          <h3>Work Premise</h3>
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
              <i className="fas   fa-list "></i>
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
              <i className="fas fa-th-large float-right "></i>
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
          listData={workPrimisesList}
          toggle={() => {
            setIsOpenListView(!isOpenListView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditClick(val, id)}
        ></ListView>
      </Collapse>
    </div>
  );
};

WorkPrimise.prototype = {
  getWorkPrimise: PropTypes.func,
  addWOrkPrimise: PropTypes.func,
};

const mapStateToProps = (state) => ({
  workPrimisesList: state.adminSettingReducer,
});

export default connect(mapStateToProps, { getWorkPrimise, addWOrkPrimise })(
  WorkPrimise
);
