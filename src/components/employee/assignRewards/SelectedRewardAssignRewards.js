import React, { Fragment } from "react";
import { Row, Col, Card } from "reactstrap";

const SelectedRewardAssignRewards = React.memo(
  ({ selectedReward, delSelectedReward }) => {
    return (
      <Fragment>
        <div className="selected-card">
          <Row className="admin-settings  py-3">
            {selectedReward.map((el) => (
              <Col
                key={el.rewardId}
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className="mb-3 "
              >
                <Card body inverse className="card-tile d-inline">
                  {el.reward}
                  <i
                    className="fas fa-times text-right ml-3"
                    onClick={() => delSelectedReward(el.rewardId)}
                  ></i>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Fragment>
    );
  }
);

export default SelectedRewardAssignRewards;
