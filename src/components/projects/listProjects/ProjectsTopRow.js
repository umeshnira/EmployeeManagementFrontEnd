import React, { Fragment } from "react";
import {
  Button,
  Row,
  Col,
  Collapse,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

const ProjectsTopRow = React.memo((props) => {
  return (
    <Fragment>
      <Row>
        {/* {console.log("Emp to row")} */}
        <Col>
          <h3>
            Projects
            <Button
              size="sm"
              outline
              color=""
              className="btn-admin-settings ml-2"
              onClick={props.handleOpenAddForm}
            >
              <i className="fas fa-plus"></i>{" "}
            </Button>
          </h3>
        </Col>
        <Col>
          {props.isOpenEmpGridView ? (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={props.showEmpCard}
            >
              <i className="fas fa-th-large "></i>
            </Button>
          ) : null}
          {props.isOpenEmpListCard ? (
            <Button
              color=""
              className="btn-admin-settings float-right"
              onClick={props.showGridView}
            >
              <i className="fas fa-list "></i>
            </Button>
          ) : null}
          <Button
            color=""
            className="btn-admin-settings float-right"
            onClick={props.searchBox}
          >
            <i className="fas fa-search-plus"></i>
          </Button>
        </Col>
      </Row>

      <Collapse isOpen={props.isOpenSerachBox}>
        <Row className="mt-2">
          <Col sm={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Project</InputGroupText>
              </InputGroupAddon>
              <Input
                style={{ height: "60px" }}
                onChange={(e) =>
                  props.serachProjectList("projectName", e.target.value)
                }
              />
            </InputGroup>
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Leader</InputGroupText>
              </InputGroupAddon>
              <Input
                style={{ height: "60px" }}
                onChange={(e) =>
                  props.serachProjectList("leader", e.target.value)
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </Collapse>
    </Fragment>
  );
});

export default ProjectsTopRow;
