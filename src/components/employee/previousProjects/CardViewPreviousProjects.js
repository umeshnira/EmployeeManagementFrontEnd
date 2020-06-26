import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col, Card, CardBody, CardTitle, Progress } from "reactstrap";
// import DropDownActions from "../../common/DropDownActions";
import {
  getWorkExperience,
} from "../../../redux/actions/employee/employee.action";


const CardViewPreviousProjects = React.memo((props) => {
  const { getWorkExperience } = props;
  const { empworkexp } = props.empworkexp;
  
  useEffect(() => {  
    getWorkExperience(props.employeeId);
  }, [getWorkExperience]);

  return (
    <Fragment>
        {empworkexp.map((project, i) => (
        <Col key={i} md={4} sm={6} xl={3}>
          <Card className="project-crad mb-4">
            <CardBody>
              <CardTitle>
                <h4 className="project-title">
                  {/* <a href={`/viewProject/${project.projectId}`}>
                    {project.projectName}
                  </a> */}
                  <a>
                    {project.projectName}
                  </a>
                  <div className="dropDown-action">
                    {/* <DropDownActions
                      selectedOpt={project.status}
                      dropDownOption={[
                        {
                          action: "Edit",
                          handleAction: () => handleProjectEdit(project),
                        },
                        {
                          action: "Delete",
                          // handleAction: () => handleEditProject(project),
                        },
                      ]}
                    ></DropDownActions> */}
                    {/* <Dropdown
                      isOpen={
                        // true
                        setDropdownOpt.current === i ? dropdownOpen : false
                      }
                      toggle={() => toggle(i)}
                      // onClick={() => toggle(i)}
                    >
                      <DropdownToggle color="">
                        <i className="fas fa-ellipsis-v text-muted"></i>
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        modifiers={{
                          setMinWidth: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  minWidth: "100px",
                                },
                              };
                            },
                          },
                        }}
                      >
                        <DropdownItem
                          onClick={() => handleProjectEdit(project)}
                        >
                          Edit
                        </DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown> */}
                  </div>
                </h4>
              </CardTitle>
              <span className="text-muted mt-3 project-description">
                {project.description}
              </span>
              <div className="mt-3">
                <h4 className="project-title mb-1">Role :</h4>
                  <div className="text-muted">{project.role}</div>
              </div>
              <div className="mt-3">
                <h4 className="project-title">Environment :</h4>
                <div className="text-muted">
                  {project.technologies}
                </div>
              </div>
              <div className="mt-3">
                <h4 className="project-title">Technologies :</h4>
                <div className="text-muted">
                  {project.technologies}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))} 
    </Fragment>
  );
});

const mapStateToProps = (state) => ({
  empworkexp: state.empReducer,
});

export default connect(mapStateToProps, {
  getWorkExperience,
  // addEmpEducationalInfo,
  // updateEmpEducationalInfo,
  // delEmpEducationalInfo,
})(CardViewPreviousProjects);
