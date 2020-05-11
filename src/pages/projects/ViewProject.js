import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Collapse } from "reactstrap";
import { getSelectProject } from "../../redux/actions/projects/projects.action";
import { getEmpList } from "../../redux/actions/employee/employee.action";
import {
  DescpProject,
  UploadedFilesProject,
  TaskTabsProject,
  DetailsProject,
  LeadersPoject,
  TeamProject,
  TechnologiesProject,
  AddEditFormProject,
} from "../../components/projects/index";

const ViewProject = (props) => {
  const { selectProject } = props.selectProject;
  const { empList } = props.empList;
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  useEffect(() => {
    let projectId = props.match.params.projectId;
    props.getSelectProject(projectId);
    props.getEmpList();
  }, []);

  const toggleForm = React.useCallback(() => {
    setIsOpenEditForm((prevState) => !prevState);
  }, [setIsOpenEditForm]);

  return selectProject ? (
    <Fragment>
      <Row className="mb-4">
        <Col xs={12} sm={9} md={9} lg={9}>
          <h4>Employee Managment</h4>
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Button
            color=""
            className="btn-admin-settings w-100"
            onClick={toggleForm}
          >
            Edit Project
          </Button>{" "}
        </Col>
      </Row>

      <Collapse isOpen={isOpenEditForm}>
        <AddEditFormProject
          selectProject={selectProject}
          empList={empList}
          toggleForm={toggleForm}
        ></AddEditFormProject>
      </Collapse>
      <Collapse isOpen={!isOpenEditForm}>
        <Row className="project-box">
          <Col xs={12} sm={9} md={9} lg={9}>
            <DescpProject
              projectDescp={selectProject.projectDescp}
            ></DescpProject>
            <UploadedFilesProject></UploadedFilesProject>
            <TaskTabsProject></TaskTabsProject>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <DetailsProject></DetailsProject>
            <TechnologiesProject
              technologies={selectProject.technology}
            ></TechnologiesProject>
            <LeadersPoject
              leaders={selectProject.projectLeaders}
              empList={empList}
            ></LeadersPoject>
            <TeamProject
              team={selectProject.projectTeam}
              empList={empList}
            ></TeamProject>
          </Col>
        </Row>
      </Collapse>
    </Fragment>
  ) : null;
};

const mapStateToProps = (state) => ({
  selectProject: state.projectReducer,
  empList: state.empReducer,
});

export default connect(mapStateToProps, { getSelectProject, getEmpList })(
  ViewProject
);
