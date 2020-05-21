import React, { useState } from "react";
import { Card, CardBody, Row, Col, Collapse, Button } from "reactstrap";

export const TopCardReward = React.memo(({ selectEmp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHowToGetRedeem = () => setIsOpen(!isOpen);
  return (
    <Card style={{ borderRadius: "5px" }}>
      <CardBody>
        {/* check whether the props has the value */}
        {selectEmp.value ? (
          <Row>
            <Col>
              <div className="profile-view">
                <div className="profile-img-wrap">
                  <div className="profile-img">
                    {/* <a href="#"> */}
                    <img
                      alt=""
                      src={require(`../../../img/employee/${selectEmp.value.profileImg}`)}
                    />
                    {/* </a> */}
                  </div>
                </div>
                <div className="profile-basic">
                  <div className="row">
                    <div className="col-md-5">
                      <h3 className="user-name m-t-0 mb-0">
                        {selectEmp.value.empName}
                      </h3>
                      <h6 className="text-muted">
                        {selectEmp.value.designation}
                      </h6>
                      <small className="text-muted">Web Designer</small>
                      <div className="staff-id">
                        Employee ID : {selectEmp.value.empId}
                      </div>
                      <div className="small doj text-muted">
                        Date of Join : {selectEmp.value.doj}
                      </div>
                      <div className="staff-msg">
                        <a className="btn btn-custom" href="chat.html">
                          {/* Send Message */}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7 reward-info profile-info-left">
                      <Row className="">
                        <Col sm={4} xs={4}>
                          <div className=" ">
                            <div className="rounded-div one">4000</div>
                            <span className="text">Total Points Achieved</span>
                          </div>
                        </Col>
                        <Col sm={4} xs={4}>
                          <div className=" ">
                            <div className="rounded-div two">12000</div>
                            <span className="text">Total Points Redeemed</span>
                          </div>
                        </Col>
                        <Col sm={4} xs={4}>
                          <div className=" ">
                            <div className="rounded-div three">8000</div>
                            <span className="text">Points Need to Redeem</span>
                          </div>
                        </Col>
                      </Row>

                      {/* <ul className="personal-info">
                        <li>
                          <div className="title">
                            Total Reward Points Achieved
                          </div>
                          <div className="text">
                            <span className="">4000</span>
                          </div>
                        </li>
                        <li>
                          <div className="title">
                            Total Reward Points Redeemed
                          </div>
                          <div className="text">
                            <span className="">12000</span>
                          </div>
                        </li>
                        <li>
                          <div className="title">
                            Total Reward Points Need to Redeem
                          </div>
                          <div className="text">
                            <span className="link-text">8000</span>
                          </div>
                        </li>
                      </ul> */}
                      <Collapse isOpen={isOpen}>
                        <hr></hr>
                        <span
                          className="text-muted"
                          // style={{ position: "aboslute" }}
                        >
                          How to get reedm point, by just give your 80% on
                          planing and 20% on your work.
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
                          <div
                            className="reward-help"
                            onClick={toggleHowToGetRedeem}
                          >
                            <span className="edit-icon">
                              <i className="fas fa-question"></i>
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : null}
      </CardBody>
    </Card>
  );
});
