import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

const EmpProfileViewToCard = React.memo(({ selectEmp }) => {
  return (
    <Card style={{ borderRadius: "5px" }}>
      <CardBody>
        {console.log(selectEmp)}
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
                      <div className="profile-info-left">
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
                    </div>
                    <div className="col-md-7">
                      <ul className="personal-info">
                        <li>
                          <div className="title">Phone:</div>
                          <div className="text">
                            <span className="link-text">
                              {selectEmp.value.mobileNo}
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="title">Email:</div>
                          <div className="text">
                            <span className="link-text">
                              {selectEmp.value.niraMailId}
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="title">Birthday:</div>
                          <div className="text">{selectEmp.value.dob}</div>
                        </li>
                        <li>
                          <div className="title">Address:</div>
                          <div className="text">{selectEmp.value.address}</div>
                        </li>
                        <li>
                          <div className="title">Gender:</div>
                          <div className="text">Male</div>
                        </li>
                        <li>
                          <div className="title">Reports to:</div>
                          <div className="text">
                            <div className="avatar-box">
                              <div className="avatar avatar-xs">
                                <img
                                  src={require(`../../../img/employee/avatar-01.jpg`)}
                                  alt=""
                                />
                              </div>
                            </div>
                            <a href="profile.html" className="link-text">
                              Jeffery Lalor
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pro-edit">
                  <span className="edit-icon">
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        ) : null}
      </CardBody>
    </Card>
  );
});

export default EmpProfileViewToCard;
