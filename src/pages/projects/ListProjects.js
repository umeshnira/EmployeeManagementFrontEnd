import React, { Fragment, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Container, Collapse, Row, Col, Card, CardBody } from "reactstrap";

import {
  ProjectsTopRow,
  CardViewProjects,
  useProjectsTableEle,
  AddEditFormProject,
} from "../../components/projects/index";
import { getProjectList } from "../../redux/actions/projects/projects.action";
import { getEmpList } from "../../redux/actions/employee/employee.action";
import TableWithSortPagtn from "../../components/common/TableWithSortPagtn";
import { projectsList } from "../../datas/projects";
// require("bootstrap/less/bootstrap.less");

const ListProjects = (props) => {
  const { projectList } = props.projectList;
  const { empList } = props.empList;
  const [searchArr, setSearchArr] = useState(projectList);
  const searched = useRef(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpenAddEditForm, setIsOpenAddEditForm] = useState(false);
  const [isOpenProjectCardView, setIsOpenProjectCardView] = useState(true);
  const [isOpenProjectGridView, setIsOpenProjectGridView] = useState(false);
  const [isOpenSerachBox, setIsOpenSerachBox] = useState(false);

  // customer hooks to gird view of employee,
  // if search arr is empty then map from list else map from searched arr.
  const { thead, trow } = useProjectsTableEle(
    searched.current ? searchArr : projectList
  );

  useEffect(() => {
    props.getProjectList();
    props.getEmpList();
  }, []);

  // -------------Functions

  // handle click in EmployeeAddForm.js 'add'.
  const handleAddProject = React.useCallback((projectData) => {
    console.log(projectData);
  }, []);

  // handle click in AddEditFormProject.js 'update'.
  const handleUpdateProject = React.useCallback((projectData) => {
    // will get the selected project id from the selectedProject.
    console.log(projectData);
  }, []);

  // handle click in EmployeeCard.js
  const handleProjectEdit = React.useCallback(
    (project) => {
      setSelectedProject(project);
      setIsOpenAddEditForm((prevState) => !prevState);
      setIsOpenProjectCardView(false);
      setIsOpenProjectGridView(false);
    },
    [setIsOpenProjectCardView]
  );

  // open add form.
  const handleOpenAddForm = React.useCallback(() => {
    setIsOpenAddEditForm((prevState) => !prevState);
    setIsOpenProjectCardView(false);
    setIsOpenProjectGridView(false);
    setSelectedProject(null);
  }, [setIsOpenAddEditForm, setIsOpenProjectCardView]);

  const toogleFromProjectAddEditForm = React.useCallback(() => {
    setIsOpenAddEditForm((prevState) => !prevState);
    setIsOpenProjectCardView((prevState) => !prevState);
    setSelectedProject("");
  }, [setIsOpenAddEditForm, setIsOpenProjectCardView]);

  const showGridView = React.useCallback(() => {
    setIsOpenProjectCardView(false);
    setIsOpenProjectGridView(true);
  }, [setIsOpenProjectCardView]);

  const showProjectCard = React.useCallback(() => {
    setIsOpenProjectGridView(false);
    setIsOpenProjectCardView(true);
  }, [setIsOpenProjectGridView]);

  // search texh box show.
  const searchBox = React.useCallback(() => {
    setIsOpenSerachBox((prevState) => !prevState);
  }, [setIsOpenSerachBox]);

  // search filter.
  const serachProjectList = React.useCallback(
    (whatSearch, searchVal) => {
      let arr = [];
      searched.current = true;
      if (whatSearch === "projectName") {
        let searchArr = projectList.filter((ele) => {
          return (
            ele.projectName.toLowerCase().indexOf(searchVal.toLowerCase()) !==
            -1
          );
        });
        setSearchArr(searchArr);
      } else if (whatSearch === "leader") {
        if (searchVal !== "") {
          projectsList.map((project) =>
            project.projectLeaders.map((leader) => {
              return leader.leaderName
                .toLocaleLowerCase()
                .indexOf(searchVal.toLocaleLowerCase()) !== -1
                ? (arr = [project])
                : null;
            })
          );
          setSearchArr(arr);
        } else {
          setSearchArr(projectsList);
        }
      }
    },
    [projectList]
  );

  console.log("rendering");
  return (
    <Fragment>
      <Container>
        {/* Top Row.--------------------------------- */}
        <ProjectsTopRow
          serachProjectList={serachProjectList}
          isOpenSerachBox={isOpenSerachBox}
          isOpenEmpGridView={isOpenProjectGridView}
          isOpenEmpListCard={isOpenProjectCardView}
          showEmpCard={showProjectCard}
          showGridView={showGridView}
          searchBox={searchBox}
        ></ProjectsTopRow>
        {/* <hr></hr> */}
        {/* Project Card list.--------------------------- */}
        <Collapse isOpen={isOpenProjectCardView} className="mt-3">
          <Row className="project-box">
            <Col md={4} sm={6} xl={3} onClick={handleOpenAddForm}>
              <Card
                className="project-crad text-center mb-4"
                style={{ height: "95%" }}
              >
                <i className="fas fa-3x fa-plus" style={{ margin: "auto" }}></i>
              </Card>
            </Col>
            {/* Project Card list comp.--------------------------- */}
            <CardViewProjects
              projectList={searched.current ? searchArr : projectList}
              handleProjectEdit={handleProjectEdit}
            ></CardViewProjects>
          </Row>
        </Collapse>

        {/* Emp Grid View.--------------------------- */}
        <Collapse isOpen={isOpenProjectGridView}>
          <Row>
            <Col className="projects-gridView">
              <TableWithSortPagtn
                thead={thead}
                trow={trow}
              ></TableWithSortPagtn>
            </Col>
            {/* span ele for styling */}
          </Row>
        </Collapse>

        {/* Add & edit employee form.------------------------ */}
        <Collapse isOpen={isOpenAddEditForm}>
          <AddEditFormProject
            empList={empList}
            selectedProject={selectedProject}
            handleAddProject={handleAddProject}
            handleUpdateProject={handleUpdateProject}
            toogleFromProjectAddEditForm={toogleFromProjectAddEditForm}
          ></AddEditFormProject>
        </Collapse>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  projectList: state.projectReducer,
  empList: state.empReducer,
});

export default connect(mapStateToProps, { getProjectList, getEmpList })(
  ListProjects
);
