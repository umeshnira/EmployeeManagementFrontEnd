import React, { Fragment } from "react";
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
} from "reactstrap";

const TopRowPEttyCash = React.memo(({ toggleAddEditForm }) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <h5>Petty Cash</h5>
        </Col>

        <Col xs={6} className="text-right">
          {/* <InputGroup className="mr-1">
            <Input
              placeholder="Search Employee..."
              onChange={(e) => handleSearchEmployee(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="fa fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup> */}
          <Button
            outline
            color="primary"
            className=" "
            onClick={toggleAddEditForm}
          >
            <i className="fa fa-plus mt-1 "></i>
            &nbsp;Expense
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
});

export default TopRowPEttyCash;
