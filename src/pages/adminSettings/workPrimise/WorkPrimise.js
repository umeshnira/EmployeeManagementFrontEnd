import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Collapse, Row, Col, Button } from "reactstrap";
import {
  GridView,
  FromFields,
  FromEditFields,
  useTableWorkPrimise,
} from "../../../components/adminSettings/index";
import {
  getWorkPrimise,
  addWorkPrimise,
  updateWorkPrimise,
  delWorkPrimise,
} from "../../../redux/actions/adminSettings/adminSettings.action";
import TableWithSortPagtn from "../../../components/common/TableWithSortPagtn";

const WorkPrimise = (props) => {
  const {
    getWorkPrimise,
    addWorkPrimise,
    updateWorkPrimise,
    delWorkPrimise,
  } = props;
  const { workPrimisesList } = props.workPrimisesList;
  const [dataArr, setDataArr] = useState([]);
  const [workPrimise, setWorkPrimise] = useState("");

  const [selectedData, setSelectedData] = useState({ id: "", val: "" });

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenListView, setIsOpenListView] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [workPrimiseInpuFields] = useState([
    {
      label: "Work Premise Type",
      type: "text",
      placeholder: "Enter Work Premise",
      name: "workingPremiseType", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        setWorkPrimise(val);
      },
    },
  ]);

  useEffect(() => {
    getWorkPrimise();
  }, [getWorkPrimise]);

  useEffect(() => {
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
  const handleEditClick = React.useCallback((val, id) => {
    setSelectedData({ id: id, val: val });
  }, []);

  const handleDataAdd = (e) => {
    e.preventDefault();
    console.log(workPrimise);
    let formData = {
      workingPremiseType: workPrimise,
      description: "",
    };
    addWorkPrimise(formData);
    toggle();
  };
  const handleDataUpdate = (e) => {
    e.preventDefault();
    console.log(selectedData.val);
    let formData = selectedData.val;
    updateWorkPrimise(formData);
    setSelectedData({ id: "", val: "" });
    toggle();
  };

  // handle delete work primise.
  const handleDelWorkPrimsie = React.useCallback(
    (delId) => {
      delWorkPrimise(delId);
    },
    [delWorkPrimise]
  );

  const toggleBtn = React.useCallback(() => {
    setIsOpenGridView((prevState) => !prevState);
    setIsOpenListView((prevState) => !prevState);
  }, [setIsOpenGridView, setIsOpenListView]);

  const onClickToggleFromTable = React.useCallback(() => {
    setIsOpenListView((prevState) => !prevState);
    setIsOpenForm((prevState) => !prevState);
  }, [setIsOpenListView, setIsOpenForm]);

  // customer hook.
  const { thead, trow } = useTableWorkPrimise(
    dataArr,
    handleDelWorkPrimsie,
    handleEditClick,
    onClickToggleFromTable
  );

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
              onClick={toggleBtn}
            >
              <i className="fas   fa-list "></i>
            </Button>
          ) : (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={toggleBtn}
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
          displayData={{
            heading: "workingPremiseType",
            id: "workingPremiseId",
          }}
          isOpenGridView={isOpenGridView}
          emptyFormField={() => setSelectedData({ id: "", val: "" })}
          toggle={() => {
            setIsOpenGridView(!isOpenGridView);
            setIsOpenForm(!isOpenForm);
          }}
          handleSelectedDesg={(val, id) => handleEditClick(val, id)}
          handleDel={handleDelWorkPrimsie}
        ></GridView>
      </Collapse>

      <Collapse isOpen={isOpenListView}>
        <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
      </Collapse>
    </div>
  );
};

WorkPrimise.prototype = {
  getWorkPrimise: PropTypes.func,
  addWorkPrimise: PropTypes.func,
  updateWorkPrimise: PropTypes.func,
};

const mapStateToProps = (state) => ({
  workPrimisesList: state.adminSettingReducer,
});

export default connect(mapStateToProps, {
  getWorkPrimise,
  addWorkPrimise,
  updateWorkPrimise,
  delWorkPrimise,
})(WorkPrimise);
