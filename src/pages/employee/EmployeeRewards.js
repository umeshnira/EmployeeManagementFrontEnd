import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { getSelectedEmp } from "../../redux/actions/employee/employee.action";
import {} from "reactstrap";
import { TopCardReward } from "../../components/employee/employeeReward/TopCardReward";
import { RewardAchieved } from "../../components/employee/employeeReward/RewardAchieved";

const EmployeeRewards = (props) => {
  const { selectEmp, empCertificate, empSkill } = props.selectEmp;

  useEffect(() => {
    let empId = props.match.params.empId;
    props.getSelectedEmp(empId);
  }, []);

  return (
    <Fragment>
      <TopCardReward selectEmp={selectEmp}></TopCardReward>
      {/* -------------------------------------------- 1st comp */}
      <RewardAchieved></RewardAchieved>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  selectEmp: state.empReducer,
});

export default connect(mapStateToProps, {
  getSelectedEmp,
})(EmployeeRewards);
