import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";
import {
  getSelectedEmp,
  delCertificateEmp,
  addEmpSkill,
} from "../../redux/actions/employee/employee.action";
import {
  EmpProfileViewTopCard,
  EmpProfileViewTabs,
} from "../../components/employee/index";
import { getProjectList } from "../../redux/actions/projects/projects.action";

const EmployeeProfileView = (props) => {
  const { selectEmp, empCertificate, empSkill } = props.selectEmp;

  useEffect(() => {
    let empId = props.match.params.empId;
    props.getSelectedEmp(empId);
    props.getProjectList();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>Profile</h3>
        </Col>
      </Row>
      <EmpProfileViewTopCard selectEmp={selectEmp}></EmpProfileViewTopCard>
      <EmpProfileViewTabs></EmpProfileViewTabs>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectEmp: state.empReducer,
  projectList: state.projectReducer,
});

export default connect(mapStateToProps, {
  getSelectedEmp,
  delCertificateEmp,
  addEmpSkill,
  getProjectList,
})(EmployeeProfileView);
