import React from "react";
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const TopRowPLReport = () => {
  return (
    <Row>
      <Col>
        <h5>Salary Report </h5>
      </Col>
      <Col xs={6} className="  d-flex">
        <InputGroup className="mr-1">
          <Input
            placeholder="Search Employee..."
            // onChange={(e) => handleSearchEmployee(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <i className="fa fa-search"></i>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TopRowPLReport;
