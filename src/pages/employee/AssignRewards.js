import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Container, Input, Button, Label } from "reactstrap";
import {
  useEmpListAssignRewards,
  useForTableValues,
  useSelectedReward,
  RewardListAssignRewards,
  SelectedEmpAssignRewards,
} from "../../components/employee/index";
import TableWithSortPagtn from "../../components/common/TableWithSortPagtn";
import { getEmpList } from "../../redux/actions/employee/employee.action";
import { getRewards } from "../../redux/actions/adminSettings/adminSettings.action";
import { getProjectList } from "../../redux/actions/projects/projects.action";

const AssignRewards = (props) => {
  const { getEmpList, getRewards, getProjectList } = props;
  const { empList } = props.empList;
  const { projectList } = props.projectList;
  const { rewards } = props.rewards;

  const [empData, setEmpData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState([]);
  const [selectedReward, setSelectedReward] = useState([]);

  useEffect(() => {
    getEmpList();
    getRewards();
    getProjectList();
  }, [getEmpList, getRewards, getProjectList]);

  useEffect(() => {
    setEmpData(empList);
    setRewardData(rewards);
  }, [empList, rewards]);

  //   Function....
  // search employee by name.
  const searchEmployee = React.useCallback(
    (searchVal) => {
      let searchArr = empList.filter(
        (el) =>
          el.value.empName.toLowerCase().indexOf(searchVal.toLowerCase()) !==
            -1 ||
          el.value.officeLocation
            .toLowerCase()
            .indexOf(searchVal.toLowerCase()) !== -1
      );
      setEmpData(searchArr);
    },
    [empList]
  );
  // search rewards by description.
  const searchRewards = React.useCallback(
    (searchVal) => {
      let searchArr = rewards.filter(
        (el) => el.reward.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
      );
      setRewardData(searchArr);
    },
    [rewards]
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

  // handle submit.
  const handleAssignRewardSubmit = React.useCallback(() => {
    console.log(selectedEmp);
    console.log(selectedReward);
  }, [selectedEmp, selectedReward]);

  // custome hook.

  const { empArr } = useForTableValues(empData, projectList);

  const { thead, trow } = useEmpListAssignRewards(empArr, handleSelectedEmp);

  const { theadSelectedReward, trowSelectedReward } = useSelectedReward(
    selectedReward,
    delSelectedReward
  );

  // handle select all employee.
  const handleSelectAllEmp = React.useCallback(
    (e) => {
      console.log(e.target.checked);
      let checkBox = e.target.checked;
      let tempArr = [];
      if (checkBox) {
        empArr.map((employee) => tempArr.push(employee.emp));
        setSelectedEmp(tempArr);
      } else {
        setSelectedEmp([]);
      }
    },
    [empArr]
  );

  return (
    <Fragment>
      <Container className="assign-rewards">
        <Row>
          <Col>{/* <h3>Assign Rewards</h3> */}</Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={6} lg={5}>
            <Row>
              <Col>
                {" "}
                <h5>Employees</h5>
              </Col>
              <Col>
                <Input
                  type="text"
                  className="d-inline"
                  placeholder="Search Employee...."
                  onChange={(e) => searchEmployee(e.target.value)}
                />
              </Col>
            </Row>
            <Label check>
              <Input type="checkbox" onChange={handleSelectAllEmp} />
              Select All
            </Label>
            <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>

            {/* <EmpListAssignRewards
              empList={empData}
              handleSelectedEmp={handleSelectedEmp}
            ></EmpListAssignRewards> */}
          </Col>
          <Col xs={12} sm={4} md={6} lg={6}>
            <Row>
              <Col>
                {" "}
                <h5>Rewards</h5>
              </Col>
              <Col>
                <Input
                  type="text"
                  className="d-inline"
                  placeholder="Search Rewards...."
                  onChange={(e) => searchRewards(e.target.value)}
                />
              </Col>
            </Row>
            <RewardListAssignRewards
              rewards={rewardData}
              handleSelectedReward={handleSelectedReward}
            ></RewardListAssignRewards>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={5} md={5} lg={5}>
            <SelectedEmpAssignRewards
              selectedEmp={selectedEmp}
              delSelectedEmp={delSelectedEmp}
            ></SelectedEmpAssignRewards>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="selected-rewards">
            {selectedReward.length > 0 ? (
              <TableWithSortPagtn
                thead={theadSelectedReward}
                trow={trowSelectedReward}
              ></TableWithSortPagtn>
            ) : null}

            {/* <SelectedRewardAssignRewards
              delSelectedReward={delSelectedReward}
              selectedReward={selectedReward}
            ></SelectedRewardAssignRewards> */}
          </Col>
        </Row>
        {/* footer  */}
      </Container>
      <Button
        // color="danger"
        className="assign-reward-btn-submit float-right"
        // outline
        onClick={handleAssignRewardSubmit}
      >
        <i class="far fa-hand-point-up"></i> Assign
      </Button>
    </Fragment>
  );
};

AssignRewards.prototype = {
  getEmpList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  empList: state.empReducer,
  projectList: state.projectReducer,
  rewards: state.adminSettingReducer,
});

export default connect(mapStateToProps, {
  getEmpList,
  getRewards,
  getProjectList,
})(AssignRewards);