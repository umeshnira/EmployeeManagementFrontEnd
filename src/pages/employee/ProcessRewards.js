import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProcessRewards } from "../../redux/actions/processRewards/processRewards.action";

import { useTableProcessRewards } from "../../components/processRewards/index";
import TableWithSortPagtn from "../../components/common/TableWithSortPagtn";
import { Container, Row, Col, Input } from "reactstrap";

const ProcessRewards = (props) => {
  const { getProcessRewards } = props;
  const { toProcessRewards } = props.toProcessRewards;
  const [toProcessRewardsData, setToProcessRewardsData] = useState([]);

  useEffect(() => {
    getProcessRewards();
  }, [getProcessRewards]);

  useEffect(() => {
    setToProcessRewardsData(toProcessRewards);
  }, [toProcessRewards]);

  //   Function ....
  // handle search employee.
  const handleSearch = React.useCallback(
    (searchVal) => {
      let tempArr = toProcessRewards.filter(
        (el) => el.empName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
      );
      setToProcessRewardsData(tempArr);
    },
    [toProcessRewards]
  );

  //   custom hook.
  const { thead, trow } = useTableProcessRewards(
    toProcessRewardsData,
    handleSearch
  );

  return (
    <Fragment>
      <Container className="process-rewards">
        <Row>
          <Col>
            <h3>Process Rewards</h3>
          </Col>
          <Col>
            <Input
              type="text"
              className="d-inline"
              placeholder="Search Employee...."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Col>
        </Row>
        <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
      </Container>
      {/* <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn> */}
    </Fragment>
  );
};

ProcessRewards.prototype = {
  getProcessRewards: PropTypes.func,
};

const mapStateToProps = (state) => ({
  toProcessRewards: state.ProcessRewardsReducer,
});

export default connect(mapStateToProps, { getProcessRewards })(ProcessRewards);
