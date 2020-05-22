import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Container, Input } from "reactstrap";
import {
  EmpListAssignRewards,
  RewardListAssignRewards,
  SelectedEmpAssignRewards,
  SelectedRewardAssignRewards,
} from "../../components/employee/index";
import { getEmpList } from "../../redux/actions/employee/employee.action";
import { getRewards } from "../../redux/actions/adminSettings/adminSettings.action";
import { rewardData } from "../../datas/adminSettings";

const AssignRewards = (props) => {
  const { getEmpList, getRewards } = props;
  const { empList } = props.empList;
  const { rewards } = props.rewards;
  const [empData, setEmpData] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState([]);
  const [selectedReward, setSelectedReward] = useState([]);

  useEffect(() => {
    getEmpList();
    getRewards();
  }, [getEmpList, getRewards]);

  useEffect(() => {
    setEmpData(empList);
  }, [empList]);

  //   Function....
  // search employee by name.
  const searchEmployee = React.useCallback(
    (searchVal) => {
      let searchArr = empList.filter(
        (el) =>
          el.value.empName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
      );
      setEmpData(searchArr);
    },
    [empList]
  );

  //   append to arr selected employee.
  const handleSelectedEmp = React.useCallback((emp) => {
    setSelectedEmp((precState) => [...precState, emp]);
  }, []);

  //   delete selected employee.
  const delSelectedEmp = React.useCallback(
    (empId) => {
      let filterArr = selectedEmp.filter((el) => el.empId !== empId);
      setSelectedEmp(filterArr);
    },
    [selectedEmp]
  );
  //   append to arr selected employee.
  const handleSelectedReward = React.useCallback((reward) => {
    console.log(reward);
    setSelectedReward((prevState) => [...prevState, reward]);
  }, []);

  const delSelectedReward = React.useCallback(
    (rewardId) => {
      let filterArr = selectedReward.filter((el) => el.rewardId !== rewardId);
      setSelectedReward(filterArr);
    },
    [selectedReward]
  );

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>{/* <h3>Assign Rewards</h3> */}</Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={4} lg={6}>
            <Row>
              <Col>
                {" "}
                <h5>Employees</h5>
              </Col>
              <Col>
                <Input
                  type="text"
                  className="d-inline"
                  placeholder="Search Employee here...."
                  onChange={(e) => searchEmployee(e.target.value)}
                />
              </Col>
            </Row>

            <EmpListAssignRewards
              empList={empData}
              handleSelectedEmp={handleSelectedEmp}
            ></EmpListAssignRewards>
          </Col>
          <Col>
            <SelectedEmpAssignRewards
              selectedEmp={selectedEmp}
              delSelectedEmp={delSelectedEmp}
            ></SelectedEmpAssignRewards>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <h5>Rewards</h5>
            <RewardListAssignRewards
              rewards={rewards}
              handleSelectedReward={handleSelectedReward}
            ></RewardListAssignRewards>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <SelectedRewardAssignRewards
              delSelectedReward={delSelectedReward}
              selectedReward={selectedReward}
            ></SelectedRewardAssignRewards>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

AssignRewards.prototype = {
  getEmpList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  empList: state.empReducer,
  rewards: state.adminSettingReducer,
});

export default connect(mapStateToProps, { getEmpList, getRewards })(
  AssignRewards
);
