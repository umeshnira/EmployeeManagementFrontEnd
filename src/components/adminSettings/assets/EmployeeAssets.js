import React, { Fragment, useState, useEffect } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import SelectSearchBox from "../../common/SelectBoxSearch";
import TableWithSortPagtn from "../../common/TableWithSortPagtn";

const EmployeeAssets = (props) => {
  const { empList } = props;
  const [assetsArr, setAssetsArr] = useState(props.assets);
  const [selectedUserForAssets, setSelectedUserForAssets] = useState("");
  const [trow, setTrow] = useState([]);
  const [thead, setThead] = useState([]);

  //   Functiions ------------------
  const selectedUserFromSearch = (emp) => {
    // let arr = [];
    // props.assets.map((asset, i) => {
    //   return asset.assetItems
    //     .filter((ele) => {
    //       return ele.user === user.label;
    //     })
    //     .map((el, i) => {

    //       return arr.push({ asset: asset.asset, assetItems: [el] });
    //     });
    // });
    // setAssetsArr(arr);
    let trowArr = empList
      .filter((ele) => ele.label === emp.label)
      .map((ele, i) => {
        return {
          "#": i + 1,
          "employee name": ele.label,
          action: <span onClick={() => handleTrowClick(ele)}>view Assets</span>,
        };
      });
    setTrow(trowArr);
  };
  // from TableWithSorPagtn.js, ie clicked on the row of user view more.
  const handleTrowClick = (emp) => {
    setSelectedUserForAssets(emp.label);
    let thead = ["#", "item name", "item no", "item model"];
    let arr = [];
    props.assets.map((asset, i) => {
      return asset.assetItems
        .filter((ele) => {
          return ele.user === emp.label;
        })
        .map((el, k) => {
          return arr.push({
            "#": i + 1,
            "item name": el.itemDescription,
            "item no": el.itemNo,
            "item model": el.modelNo,
          });
        });
    });
    console.log(arr);
    setThead(thead);
    setTrow(arr);
  };
  useEffect(() => {
    tableValues();
  }, [empList]);

  const tableValues = React.useCallback(() => {
    let thead = ["#", "employee name", "action"];

    let trowArr = empList.map((ele, i) => {
      return {
        "#": i + 1,
        "employee name": ele.label,
        action: <span onClick={() => handleTrowClick(ele)}>view Assets</span>,
      };
    });
    setThead(thead);
    setTrow(trowArr);
  }, [empList]);

  return (
    <Fragment>
      <Row className="mt-2 ">
        <Col xs={12} sm={8} md={8}>
          {selectedUserForAssets ? (
            <Fragment>
              {" "}
              <Button
                color=""
                className="btn-admin-settings "
                onClick={() => {
                  tableValues();
                  setSelectedUserForAssets("");
                  // setIsOpenGridView(true);
                  // setIsOpenAssetItems(false);
                  // setSelectedAsset(""); // on back set the selected data empty
                }}
              >
                <i className="fas fa-arrow-left  "></i> <strong>|</strong>&nbsp;
                <span className="text-dark">
                  Employee :{selectedUserForAssets}
                </span>
              </Button>
            </Fragment>
          ) : (
            ""
          )}
        </Col>
        <Col xs={12} sm={4} md={4}>
          <SelectSearchBox
            options={empList}
            onChange={(user) => selectedUserFromSearch(user)}
          ></SelectSearchBox>
        </Col>
      </Row>
      {/* <Table striped className="mt-2">
        <thead>
          <tr>
            <th style={{ width: "40px" }}>#</th>
            <th className="text-center">Employee Name</th>
             <th></th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp, i) => {
            return (
              <tr key={i}>
                <td className="text-right">{i + 1}</td>
                <td className="text-center">{emp.label}</td>
                <td>View more</td>
              </tr>
            );
          })}
          {assetsArr.map((asset, i) => {
            return asset.assetItems
              .filter((ele) => ele.user !== "")
              .map((assetItems, k) => {
                return (
                  <tr key={k}>
                    <td>{assetItems.user}</td>
                    <td>{assetItems.itemNo}</td>
                    <td>{asset.asset}</td>
                  </tr>
                );
              });
          })}
        </tbody>
      </Table> */}
      <TableWithSortPagtn thead={thead} trow={trow}></TableWithSortPagtn>
    </Fragment>
  );
};

export default EmployeeAssets;
