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
  "Web Based Language",
  "Desktop Based Language",
  "Mobile App Language",
  "Networking Technologies",
  "CRM",
  "Cloud Solutions",
  "SQL Database Language",
  "NoSQL Database Language",
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
    //keep already in skills to a state, for checking to show/no add card.
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
    handleCloseAddFrom();
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
                    {empSkill?.skillName?.map((skillName, i) => (
                      <Button key={i} color={btnClr[i]} className="mr-1 mb-1">
                        {skillName}
                        <i className="fas fa-times ml-2"></i>
                      </Button>
                    ))}
                  </li>
                </ul>
                {isClickAdd === empSkill.skillCategory ? (
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
                          onClick={handleCloseAddFrom}
                        >
                          <i className="fas fa-times"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                ) : null}
              </CardBody>
            </Card>
          </Col>
        ))}
        {/* div for adding skill which is not alresy present in DOM */}
        <Col md="6">
          {/* ref to scroll to down */}
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
