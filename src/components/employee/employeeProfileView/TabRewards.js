import React, { Fragment, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Table,
  Collapse,
  Button,
} from "reactstrap";

export const TabRewards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHowToGetRedeem = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <div className="reward-box ">
        <Row>
          <Col md="6">
            <Card className="flex-fill">
              <CardBody>
                <CardTitle>
                  <h3>
                    Rewards{" "}
                    <span className="float-right more-details">
                      <a href={`/empRewards/29`}> more details</a>
                    </span>
                  </h3>
                </CardTitle>

                <Row className=" reward-info">
                  <Col sm={4} xs={4}>
                    <div className=" ">
                      <div className="rounded-div one">4000</div>
                      <span className="text">Total Points Achieved</span>
                    </div>
                  </Col>
                  <Col sm={4} xs={4}>
                    <div className=" ">
                      <div className="rounded-div two">12000</div>
                      <span className="text">Points Redeemed</span>
                    </div>
                  </Col>
                  <Col sm={4} xs={4}>
                    <div className=" ">
                      <div className="rounded-div three">8000</div>
                      <span className="text">Points to Redeem</span>
                    </div>
                  </Col>
                </Row>

                <Collapse isOpen={isOpen}>
                  <hr></hr>
                  <span
                    className="text-muted"
                    // style={{ position: "aboslute" }}
                  >
                    How to get reedm point, by just give your 80% on planing and
                    20% on your work.
                  </span>
                </Collapse>
                <Row className="mt-4">
                  <Col xs={10} md={10} sm={10} lg={10}>
                    <Button
                      outline
                      color="info"
                      style={{ width: "100%", display: "block" }}
                    >
                      Redeem
                    </Button>
                  </Col>
                  <Col xs={2} md={2} sm={2} lg={2}>
                    <div className="reward-help" onClick={toggleHowToGetRedeem}>
                      <span className="edit-icon">
                        <i className="fas fa-question"></i>
                      </span>
                    </div>
                  </Col>
                </Row>

                {/* <ul className="personal-info">
                  <li>
                    <div className="title">Total Reward Point </div>
 
                    <div className="text">
                      1000 <a href={`/empRewards/29`}> more details</a>
                    </div>
                  </li>
                  <li>
                    <div className="title">Total points to Redeem </div>
                     <div className="text text-left">3000</div>
                  </li>
                  <Collapse isOpen={isOpen}>
                    <hr></hr>
                    <span
                      className="text-muted"
                      style={{ position: "aboslute" }}
                    >
                      How to earn points,<br></br> Only have to do give your 80%
                      on planing and 20% on action.
                    </span>
                  </Collapse>
                  <span
                    href="#"
                    className="text-muted float-right"
                    data-toggle="modal"
                    data-target="#emergency_contact_modal"
                    onClick={toggleHowToGetRedeem}
                  >
                    <i className="fas fa-2x fa-question-circle"></i>
                  </span>
                </ul>
                <Row>
                  <Col md={12}>
                    <Button
                      outline
                      color="info"
                      style={{ width: "100%", display: "block" }}
                    >
                      Redeem
                    </Button>
                  </Col>
                </Row> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="flex-fill">
              <CardBody>
                {/* <CardTitle>
                  <h3>Gift Card</h3>
                </CardTitle> */}
                <Table style={{ border: "" }}>
                  <thead>
                    <tr>
                      <th width="10%">#</th>
                      <th width="60%">Gift Card</th>
                      <th>Expire Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bday</td>
                      <td>28/10/2019</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Aniversary</td>
                      <td>28/10/2019</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>10 year complition</td>
                      <td>28/10/2019</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
