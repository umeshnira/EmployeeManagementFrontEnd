import React, { useState, useRef, Fragment } from "react";
import { Card, CardTitle, Row, Col, CardBody, Button, Input } from "reactstrap";

const btnClr = ["primary", "success", "warning", "info", "danger"];

export const TabSkill = React.memo(({ empSkill, addSkill }) => {
  // console.log(props);

  const [isClickAdd, setIsClickAdd] = useState("");
  const [newSkill, setNewSkill] = useState("");

  const handleClickAddBtn = React.useCallback(
    (whichSkill) => {
      setIsClickAdd(whichSkill);
    },
    [setIsClickAdd]
  );

  // close btn.
  const handleCloseAddFrom = React.useCallback(() => {
    setIsClickAdd("");
  }, []);
  // add new skill.
  const handleAddNewSkill = (skillId) => {
    addSkill(newSkill, skillId);
  };

  return (
    <div className="skill-box ">
      {console.log("tab skills")}
      {empSkill.length > 0 ? (
        <Row>
          {empSkill.map((empSkill, i) => (
            <Col key={i} md="6">
              <Card className="flex-fill">
                <CardBody>
                  <CardTitle>
                    <h3>
                      {empSkill.skillCategory}
                      <span
                        href="#"
                        className="edit-icon"
                        data-toggle="modal"
                        data-target="#emergency_contact_modal"
                        onClick={() =>
                          handleClickAddBtn(empSkill.skillCategory)
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </span>
                    </h3>
                  </CardTitle>
                  <ul className="personal-info">
                    <li>
                      {empSkill.skillName.map((skillName, i) => (
                        <Button key={i} color={btnClr[i]} className="mr-1 mb-1">
                          {skillName}
                          <i className="fas fa-times ml-2"></i>
                        </Button>
                      ))}
                    </li>
                  </ul>
                  {isClickAdd === empSkill.skillCategory ? (
                    <Row className="add-skill-form">
                      <Col
                        xs={12}
                        sm={8}
                        md={8}
                        lg={8}
                        className="add-skill-inptut "
                      >
                        <Input
                          placeholder="Add Skill"
                          onChange={(e) => setNewSkill(e.target.value)}
                        />
                      </Col>
                      <Col xs={6} sm={2} md={2} lg={2}>
                        <Button
                          color=""
                          className="btn-admin-settings"
                          onClick={() => handleAddNewSkill(empSkill.skillId)}
                          // style={{ width: "100%" }}
                        >
                          <i className="fas fa-check"></i>
                        </Button>
                      </Col>
                      <Col
                        xs={6}
                        sm={2}
                        md={2}
                        lg={2}
                        className="add-skill-closeBtn"
                      >
                        <Button
                          color=""
                          className="btn-admin-settings "
                          onClick={handleCloseAddFrom}
                        >
                          <i className="fas fa-times"></i>
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ) : null}
    </div>
  );
});
