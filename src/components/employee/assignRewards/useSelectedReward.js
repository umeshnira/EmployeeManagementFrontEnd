import React, { useState, useEffect } from "react";
// import { Row, Col, Card } from "reactstrap";

const useSelectedReward = (selectedReward, delSelectedReward) => {
  const [trowSelectedReward, setTrowSelectedReward] = useState([]);
  const [theadSelectedReward] = useState([
    "Reward",
    "Points",
    "Action",
    // "email",
    // "mobile",
    // "join date",
    // "role",
    // "action",
  ]);

  useEffect(() => {
    let trow = selectedReward.map((re, i) => {
      return {
        Reward: <span>{re.reward} </span>,
        Points: <span>{re.rewardPoint}</span>,
        Action: (
          <i
            className="fas fa-trash"
            onClick={() => delSelectedReward(re.rewardId)}
          ></i>
        ),
      };
    });
    setTrowSelectedReward(trow);
  }, [selectedReward, delSelectedReward]);
  console.log(trowSelectedReward);
  return { theadSelectedReward, trowSelectedReward };
};

// const SelectedRewardAssignRewards = React.memo(
//   ({ selectedReward, delSelectedReward }) => {
//     return (
//       <Fragment>
//         <div className="selected-card">
//           <Row className="admin-settings  py-3  ">
//             {selectedReward.map((el) => (
//               <Col
//                 key={el.rewardId}
//                 lg={6}
//                 md={6}
//                 sm={6}
//                 xs={12}
//                 className="mb-3"
//               >
//                 <Card body inverse className="card-tile  ">
//                   {el.reward}
//                   <i
//                     className=" del-reward-icon fas fa-times text-right ml-3"
//                     onClick={() => delSelectedReward(el.rewardId)}
//                   ></i>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Fragment>
//     );
//   }
// );

export default useSelectedReward;
