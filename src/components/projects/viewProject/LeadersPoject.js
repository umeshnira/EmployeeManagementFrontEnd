// <- ViewProject.js
import React, { Fragment } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const LeadersPoject = React.memo(({ leaders }) => {
  console.log("LeaderProject");
  return (
    <Fragment>
      <Card className="project-view-crad mb-4 ">
        <CardBody className="project-user">
          <CardTitle>
            <h4 className="project-title">
              {/* <a href={`/viewProject/${project.projectId}`}>
                    {project.projectName}
                  </a> */}
              Project Leaders
            </h4>
          </CardTitle>
          <ul className="list-box ">
            {leaders.map((leader, i) => (
              <li key={i}>
                <a href="profile.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require(`../../../img/employee/${leader.leaderImg}`)}
                        />
                      </span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {leader.leaderName}
                      </span>
                      <div className="clearfix"></div>
                      <span className="message-content">Team Leader</span>
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

export default LeadersPoject;
