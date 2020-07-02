import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import {
  getSelectedEmp,
  delCertificateEmp,
  addEmpSkill,
} from "../../../redux/actions/employee/employee.action";

import classnames from "classnames";
import TabProfile from "./TabProfile";
import { TabProjects } from "./TabProjects";
import { TabCertification } from "./TabCertification";
import { TabSkill } from "./TabSkill";
import { TabRewards } from "./TabRewards";

const EmpProfileViewTabs = React.memo((props) => {
  let empId = props.match.params.empId;

  const { delCertificateEmp, addEmpSkill } = props;

  const {
    selectEmp,
    empCertificate,
    empSkill,
    empeducationalInfo,
  } = props.selectEmp;
  const { projectList } = props.projectList;

  const [activeTab, setActiveTab] = useState("profile");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Functions.

  const delCertificate = React.useCallback(
    (delId) => {
      delCertificateEmp(delId);
    },
    [delCertificateEmp]
  );

  const handleAddEmpSkill = React.useCallback(
    (empNewSkill, skillId) => {
      addEmpSkill(empNewSkill, skillId, 29);
    },
    [addEmpSkill]
  );

  return (
    <div>
      {console.log("Main Tab")}

      <Nav tabs className="mt-2">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "profile" })}
            onClick={() => {
              toggle("profile");
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "projects" })}
            onClick={() => {
              toggle("projects");
            }}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "skills" })}
            onClick={() => {
              toggle("skills");
            }}
          >
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "certification" })}
            onClick={() => {
              toggle("certification");
            }}
          >
            Certification
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "rewards" })}
            onClick={() => {
              toggle("rewards");
            }}
          >
            Rewards
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="mt-2">
        <TabPane tabId="profile">
          <TabProfile
            selectEmp={selectEmp}
            educationalInfo={empeducationalInfo}
            employeeId={empId}
          ></TabProfile>
        </TabPane>
        <TabPane tabId="projects">
          <TabProjects
            projectList={projectList}
            employeeId={empId}
          ></TabProjects>
        </TabPane>
        <TabPane tabId="skills">
          <TabSkill empSkill={empSkill} addSkill={handleAddEmpSkill}></TabSkill>
        </TabPane>
        <TabPane tabId="certification">
          <TabCertification
            empCertificate={empCertificate}
            delCertificate={delCertificate}
          ></TabCertification>
        </TabPane>
        <TabPane tabId="rewards">
          <TabRewards></TabRewards>
        </TabPane>
      </TabContent>
    </div>
  );
});

const mapStateToProps = (state) => ({
  selectEmp: state.empReducer,
  projectList: state.projectReducer,
});

export default connect(mapStateToProps, {
  getSelectedEmp,
  delCertificateEmp,
  addEmpSkill,
})(EmpProfileViewTabs);
