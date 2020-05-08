// <- viewPage.js
import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

const DetailsProject = React.memo(() => {
  console.log("DetailsProject");
  return (
    <Fragment>
      <Card className="project-view-crad mb-4">
        <CardBody>
          <CardTitle>
            <h4 className="project-title">
              {/* <a href={`/viewProject/${project.projectId}`}>
                    {project.projectName}
                  </a> */}
              Project Deatils
            </h4>
          </CardTitle>
          <Table striped className="project-details-table mt-4">
            <tbody>
              <tr>
                <td>Cost</td>
                <td>$40,000</td>
              </tr>
              <tr>
                <td>Total Hours</td>
                <td>120 hours</td>
              </tr>
              <tr>
                <td>Created</td>
                <td>25 Sept 2019</td>
              </tr>
              <tr>
                <td>Created by</td>
                <td className="link-name">Waston</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>Active</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Fragment>
  );
});

export default DetailsProject;
