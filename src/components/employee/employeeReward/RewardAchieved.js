import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap";

export const RewardAchieved = () => {
  return (
    <Fragment>
      <Row className="mt-2 reward-box ">
        <Col md="6">
          <Card className="flex-fill">
            <CardBody>
              <CardTitle>
                <h3>Rewards Achived</h3>
              </CardTitle>
              <Table style={{ border: "" }}>
                <thead>
                  <tr>
                    <th width="10%">#</th>
                    <th>Date</th>
                    <th width="60%">Reward</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>28/10/2019</td>
                    <td>Best performer</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>28/10/2019</td>
                    <td>Best Team player</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>28/10/2019</td>
                    <td>Motivator</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="flex-fill">
            <CardBody>
              <CardTitle>
                <h3>Points Redeemed</h3>
              </CardTitle>
              <Table style={{ border: "" }}>
                <thead>
                  <tr>
                    <th width="10%">#</th>
                    <th>Date</th>
                    <th width="60%">Description</th>
                    <th>points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>28/10/2019</td>
                    <td>For trip to Bali</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>28/10/2019</td>
                    <td>For leave compensation</td>
                    <td>800</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
