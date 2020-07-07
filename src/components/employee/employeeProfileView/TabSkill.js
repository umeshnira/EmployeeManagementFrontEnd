import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardBody,
  Button,
  Collapse,
  Popover,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { empSkills } from "../../../datas/employee";
const btnClr = ["primary", "success", "warning", "info", "danger"];
const skillCat = [
  "technologies",
  "Web Based Languages",
  "Desktop Based Languages",
  "Mobile App Languages",
  "Networking Technologies",
  "CRM",
  "Cloud Solutions",
  "SQL Database Languages",
  "NoSQL Database Languages",
  "Design Patterns",
  "Development Tools",
];

export const TabSkill = React.memo((props) => {
  const { empSkill, addSkill } = props;

  const [isClickAdd, setIsClickAdd] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [checkSkillCategory, setCheckSkillCategory] = useState([]);
  const [isOpenAddSkillCard, setIsOpenAddSkillCard] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    let tempArr = [];
    empSkill.map((el) => tempArr.push(el.skillCategory));
    console.log(tempArr);
    //keep alrady in skills to a state, for checking to show/no add card.
    setCheckSkillCategory(tempArr);
  }, [empSkill]);

  const handleClickAddBtn = React.useCallback(
    (whichSkill) => {
      console.log(whichSkill);
      console.log(checkSkillCategory);
      if (!checkSkillCategory.includes(whichSkill)) {
        setIsOpenAddSkillCard(true);
        inputEl.current.scrollIntoView({ behavior: "smooth" });
      } else {
        setIsOpenAddSkillCard(false);
      }
      setIsClickAdd(whichSkill);
    },
    [setIsClickAdd, checkSkillCategory, inputEl]
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
      {/* {empSkill.length > 0 ? ( */}
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
                      onClick={() => handleClickAddBtn(empSkill.skillCategory)}
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
        <Col md="6">
          <div ref={inputEl}>
            <Collapse isOpen={isOpenAddSkillCard}>
              <Card className="flex-fill">
                <CardBody>
                  <CardTitle>
                    <h3>
                      {isClickAdd}
                      <span
                        href="#"
                        className="edit-icon"
                        onClick={() =>
                          handleClickAddBtn(empSkill.skillCategory)
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </span>
                    </h3>
                  </CardTitle>

                  <Form>
                    <Row form>
                      <Col md={8}>
                        <FormGroup>
                          <Label for="exampleEmail">Skill</Label>
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="Add Skill"
                            onChange={(e) => setNewSkill(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Strength</Label>
                          <Input type="select" name="select">
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="strong">Strong</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-center">
                        <Button
                          color=""
                          className="btn-admin-settings border border-primary border-right-0  w-50"
                          onClick={() => handleAddNewSkill(empSkill.skillId)}
                        >
                          <i className="fas fa-check"></i>
                        </Button>
                        <Button
                          color=""
                          className=" btn-admin-settings border border-primary  w-50 "
                          onClick={() => setIsOpenAddSkillCard(false)}
                        >
                          <i className="fas fa-times"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
      </Row>

      {/* <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}></Popover> */}
      <UncontrolledPopover trigger="legacy" placement="top" target="addSkill">
        <PopoverHeader>Add Skill</PopoverHeader>
        <PopoverBody>
          <div className="skill-popover">
            {skillCat.map((el, i) => (
              <Button
                color="secondary"
                className="m-1"
                outline
                onClick={() => handleClickAddBtn(el.toLowerCase())}
              >
                {el}
              </Button>
            ))}
          </div>
        </PopoverBody>
      </UncontrolledPopover>

      <Button color="primary" id="addSkill" outline className="skill-add-btn">
        <i className="fa fa-plus"></i>
      </Button>
    </div>
  );
});
