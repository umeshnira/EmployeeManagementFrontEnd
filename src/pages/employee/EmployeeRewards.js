import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getSelectedEmp } from "../../redux/actions/employee/employee.action";
import { TopCardReward } from "../../components/employee/employeeReward/TopCardReward";
import { RewardAchieved } from "../../components/employee/employeeReward/RewardAchieved";

const EmployeeRewards = (props) => {
  let empId = props.match.params.empId;

  const { getSelectedEmp } = props;
  const { selectEmp } = props.selectEmp;

  useEffect(() => {
    getSelectedEmp(empId);
  }, [getSelectedEmp, empId]);

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
