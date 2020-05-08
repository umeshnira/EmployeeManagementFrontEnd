// <- ViewProject.js
import React, { Fragment } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const TeamProject = React.memo(({ team }) => {
  console.log("TeamProject");
  return (
    <Fragment>
      <Card className="project-view-crad mb-4">
        <CardBody className="project-user">
          <CardTitle>
            <h4 className="project-title">
              {/* <a href={`/viewProject/${project.projectId}`}>
                    {project.projectName}
                  </a> */}
              Project Team
            </h4>
          </CardTitle>
          <ul className="list-box ">
            {team.map((member, i) => (
              <li key={i}>
                <a href="profile.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require(`../../../img/employee/${member.memberImg}`)}
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {member.memberName}
                      </span>
                      <div className="clearfix"></div>
                      <span className="message-content">Web Desinger</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Fragment>
  );
});

export default TeamProject;
