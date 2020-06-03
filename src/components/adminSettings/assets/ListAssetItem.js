// act as a parent to asset item, but this comp is the child of Asset.js
import React, { Fragment, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";
import classnames from "classnames";

export default function ListAssetItem(props) {
  // const { assetItems } = props.assetData;
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            In stock
          </NavLink>
        </NavItem>
      </Nav>
      <Container className="mt-2">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col lg={12} md={3} sm={6} xs={12} className="mb-3 ">
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item No</th>
                      <th>Item Name</th>
                      <th>Model No</th>
                      <th>Unique ID</th>
                      <th>Purchase Date</th>
                      <th>Warenty End</th>
                      <th>Vendor</th>
                      <th>User</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(props.assetData)}
                    {/* {assetItems.filter((ele) => ele.user === "")} */}
                    {props.assetData.map((itemData, i) => {
                      return (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{i + 2}</td>
                          <td>{itemData.itemModel}</td>
                          <td>{itemData.modelNo}</td>
                          <td>{itemData.uniqueIdentificationNumber}</td>
                          <td>{itemData.purchaseDate}</td>
                          <td>{itemData.warentyEndDate}</td>
                          <td>{itemData.vendor}</td>
                          <td>
                            {/* {itemData.employeeId} */}
                            {
                              props.userList.filter(
                                (el) => el.value.empId === 29
                              )[0].value.empName
                            }
                          </td>
                          <td>
                            <i className="fas fa-trash"></i>
                            &nbsp;
                            <i
                              className="fas fa-edit"
                              onClick={() => {
                                props.handleEditAssetItem(itemData, i);
                                // props.toggle();
                              }}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col lg={12} md={3} sm={6} xs={12} className="mb-3 ">
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item No</th>
                      <th>Item Description</th>
                      <th>Model No</th>
                      <th>Unique ID</th>
                      <th>Purchase Date</th>
                      <th>Warenty End</th>
                      <th>Vendor</th>
                      <th>User</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {assetItems.filter((ele) => ele.user === "")} */}
                    {/* {assetItems
                      .filter((ele) => ele.user === "")
                      .map((itemData, i) => {
                        return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{i + 2}</td>
                            <td>{itemData.itemDescription}</td>
                            <td>{itemData.modelNo}</td>
                            <td>{itemData.uniqueId}</td>
                            <td>{itemData.purchaseDate}</td>
                            <td>{itemData.vendor}</td>
                            <td>{itemData.warentyEndDate}</td>
                            <td>{itemData.user}</td>
                            <td>
                              <i className="fas fa-trash"></i>
                              &nbsp;
                              <i
                                className="fas fa-edit"
                                onClick={() => {
                                  props.handleEditAssetItem(itemData, i);
                                  // props.toggle();
                                }}
                              ></i>
                            </td>
                          </tr>
                        );
                      })} */}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </Fragment>
  );
}
