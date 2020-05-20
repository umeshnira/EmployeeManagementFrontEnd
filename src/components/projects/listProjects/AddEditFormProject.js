import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import SelectBoxSearch from "../../common/SelectBoxSearch";
import "react-datepicker/dist/react-datepicker.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
} from "reactstrap";

const AddEditFormProject = React.memo(
  ({ selectProject, empList, toggleForm }) => {
    const [projectName, setProjectName] = useState("");
    const [client, setClient] = useState("");
    const [domain, setDomain] = useState("");
    const [sourceCodePath, setSourceCodePath] = useState("");
    const [technologiesArr, setTechnologiesArr] = useState([]);
    const [technology, setTechnology] = useState("");
    const [startDate, setStartDate] = useState("");
    const [ednDate, setEndDate] = useState("");
    const [estResourceCost, setEstResourceCost] = useState("");
    const [projectBudget, setProjectBudget] = useState("");
    const [managementCost, setManagementCost] = useState("");
    const [estHrPerManDays, setEstHrPerManDays] = useState("");
    const [status, setStatus] = useState("");
    const [uploadFiles, setUploadFiles] = useState("");

    const [leaders, setLeaders] = useState([]);
    const [members, setMembers] = useState([]);
    const [projectDescp, setProjectDescp] = useState("");

    useEffect(() => {
      if (selectProject) {
        console.log(selectProject);
        setProjectName(selectProject.projectName);
        setClient(selectProject.client);
        setDomain(selectProject.domain);
        setSourceCodePath(selectProject.sourceCodePath);
        setTechnologiesArr(selectProject.technology);
        setStartDate(new Date(selectProject.startDate));
        setEndDate(new Date(selectProject.endDate));
        setEstResourceCost(selectProject.estHrPerManDays);
        setProjectBudget(selectProject.projectBudget);
        setManagementCost(selectProject.managementCost);
        setEstHrPerManDays(selectProject.estHrPerManDays);
        setStatus(selectProject.status);
        setStatus(selectProject.status);
        setLeaders(selectProject.projectLeaders);
        setMembers(selectProject.projectTeam);
        setProjectDescp(selectProject.projectDescp);
      } else {
        console.log("add");
      }
    }, [selectProject]);

    // Functions.
    //   handle change date in DOJ
    const handleChangeStartDate = (date) => {
      setStartDate(date);
    };
    //   handle change date inDOB
    const handleChangeEndDate = (date) => {
      setEndDate(date);
    };

    // Function --------------

    // append leader to array.
    const apendTechnology = React.useCallback(() => {
      let technologyData = {
        //   technologyId: technologiesArr.length + 1,
        technologyName: technology,
      };
      setTechnologiesArr((prevState) => prevState.concat(technologyData));
    }, [setTechnologiesArr, technology]);
    // delete the selected leader.
    const delTechnology = React.useCallback(
      (index) => {
        const filteredTechnology = technologiesArr
          .slice(0, index)
          .concat(technologiesArr.slice(index + 1, technologiesArr.length));
        setTechnologiesArr(filteredTechnology);
      },
      [technologiesArr]
    );

    // append leader to array.
    const apendLeader = React.useCallback(
      (leader) => {
        let leaderData = {
          leaderName: leader.label,
          leaderImg: leader.value.profileImg,
        };
        setLeaders((prevState) => prevState.concat(leaderData));
      },
      [setLeaders]
    );

    // append member to array.
    const apendMember = React.useCallback(
      (member) => {
        let memberData = {
          memberName: member.label,
          memberImg: member.value.profileImg,
        };
        setMembers((prevState) => prevState.concat(memberData));
      },
      [setMembers]
    );
    // delete the selected leader.
    const delLeader = React.useCallback(
      (index) => {
        const filteredLeaders = leaders
          .slice(0, index)
          .concat(leaders.slice(index + 1, leaders.length));
        setLeaders(filteredLeaders);
      },
      [leaders]
    );
    // delete the selected member.
    const delMemeber = React.useCallback(
      (index) => {
        const filteredMembers = members
          .slice(0, index)
          .concat(members.slice(index + 1, members.length));
        setMembers(filteredMembers);
      },

      [members]
    );

    const handleSubmitForm = (e) => {
      e.preventDefault();
      console.log(uploadFiles);
      if (selectProject) {
        // props.handleUpdateEmp(empFormData);
      } else {
        // props.handleAddEmp(empFormData);
      }
      toggleForm();
    };
    return (
      <Form className="project-form">
        <Row form>
          <Col md={6}>
            <FormGroup className="padding-r-20">
              <Label for="exampleEmail">Project Name</Label>
              <Input
                type="text"
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="padding-l-20">
              <Label>Client </Label>
              <Input
                type="text"
                onChange={(e) => setClient(e.target.value)}
                value={client}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup className="padding-r-20">
              <Label>Domain</Label>
              <Input
                type="text"
                onChange={(e) => setDomain(e.target.value)}
                value={domain}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="padding-l-20">
              <Label>Source Code Path</Label>
              <Input
                type="text"
                onChange={(e) => setSourceCodePath(e.target.value)}
                value={sourceCodePath}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={3} className="float-center">
            <FormGroup>
              <Label>Start Date</Label>
              <DatePicker
                selected={startDate}
                onChange={handleChangeStartDate}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup className="padding-r-20">
              <Label>End Date</Label>
              <DatePicker selected={ednDate} onChange={handleChangeEndDate} />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Estimated Resource Cost</Label>
              <Input
                type="text"
                onChange={(e) => setEstResourceCost(e.target.value)}
                value={estResourceCost}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup className="padding-r-20">
              <Label>Project Budget </Label>
              <Input
                type="text"
                onChange={(e) => setProjectBudget(e.target.value)}
                value={projectBudget}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup className="padding-l-20">
              <Label>Management Cost </Label>
              <Input
                type="text"
                onChange={(e) => setManagementCost(e.target.value)}
                value={managementCost}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Estimate Hour/Man-days</Label>
              <Input
                type="text"
                onChange={(e) => setEstHrPerManDays(e.target.value)}
                value={estHrPerManDays}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={5} xs={10}>
            <FormGroup

            // style={{ paddingRight: "0px" }}
            >
              <Label>Technology</Label>
              <Input
                type="text"
                onChange={(e) => setTechnology(e.target.value)}
                value={technology}
              />
            </FormGroup>
          </Col>
          <Col
            md={1}
            xs={2}
            className="mt-4  "
            style={{ paddingRight: "20px" }}
          >
            <Button
              color=""
              // size="sm"
              className="btn-admin-settings mt-2 w-100 m-0  "
              onClick={apendTechnology}
            >
              <i className="fas fa-plus"></i>
            </Button>
          </Col>
          <Col md={6}>
            <FormGroup className="padding-l-20 ">
              <Label className="d-block">Technologies</Label>
              {/* <ul className="bg-dark "> */}
              {technologiesArr.map((technology, i) => (
                // <li key={i} className="d-inline ml-2 ">
                <Button
                  key={i}
                  size="sm"
                  color="warning"
                  className="mt-2 ml-2 "
                >
                  <small> {technology.technologyName}</small>
                  <i
                    className=" ml-2 fas fa-times"
                    onClick={() => delTechnology(i)}
                  ></i>
                </Button>
                // </li>
              ))}
              {/* </ul> */}
            </FormGroup>{" "}
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup className="padding-r-20">
              <Label>Add Project Leader</Label>
              <SelectBoxSearch
                options={empList}
                onChange={apendLeader}
              ></SelectBoxSearch>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="padding-l-20">
              <Label className="d-block">Project Leader</Label>
              {leaders.map((leader, i) => (
                <h4 key={i} className="form-avatar">
                  <span className="avatar">
                    <img
                      alt=""
                      src={require(`../../../img/employee/${leader.leaderImg}`)}
                    />
                    <div className="overlay">
                      <div className="text">
                        <i
                          className="fas fa-times user-del-icon"
                          onClick={() => delLeader(i)}
                        ></i>
                      </div>
                    </div>
                  </span>
                </h4>
              ))}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup className="padding-r-20">
              <Label>Add Team Members</Label>
              <SelectBoxSearch
                options={empList}
                onChange={apendMember}
              ></SelectBoxSearch>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="padding-l-20">
              <Label className="d-block"> Team Members</Label>
              {members.map((member, i) => (
                <h4 key={i} className="form-avatar">
                  <span className="avatar">
                    <img
                      alt=""
                      src={require(`../../../img/employee/${member.memberImg}`)}
                    />
                    <div className="overlay">
                      <div className="text">
                        <i
                          className="fas fa-times user-del-icon"
                          onClick={() => delMemeber(i)}
                        ></i>
                      </div>
                    </div>
                  </span>
                </h4>
              ))}
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup className="padding-r-20">
              <Label>Status</Label>
              <Input type="select" onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Status</option>
                <option
                  value="new"
                  selected={status === "new" ? "selected" : null}
                >
                  New
                </option>
                <option
                  value="inprogress"
                  selected={status === "inProgress" ? "selected" : null}
                >
                  In Progress
                </option>
                <option
                  value="completed"
                  selected={status === "completed" ? "selected" : null}
                >
                  Completed
                </option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="padding-l-20">
              <Label></Label>
              <Input
                type="file"
                name="file"
                onChange={(e) => setUploadFiles(e.target.files[0])}
              />
              <FormText color="muted">
                Upload usefull links, and docs about the Project.
              </FormText>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label>Project Description</Label>
              <Input
                type="textarea"
                onChange={(e) => setProjectDescp(e.target.value)}
                value={projectDescp}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button
              type="submit"
              color=""
              className="btn-admin-settings"
              onClick={handleSubmitForm}
            >
              {selectProject ? "Update" : "Add"}
            </Button>
            &nbsp;
            <Button color="" className="btn-cancel" onClick={toggleForm}>
              cancel
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
);

export default AddEditFormProject;
