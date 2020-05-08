import React, { Fragment } from "react";
import { Row } from "reactstrap";
import { CardViewProjects } from "../../projects/index";

export const TabProjects = React.memo((props) => {
  return (
    <Fragment>
      {console.log("tab projects")}
      <Row className="project-box">
        <CardViewProjects projectList={props.projectList}></CardViewProjects>
      </Row>
    </Fragment>
  );
});
