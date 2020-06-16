import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SelectBoxSearch from "../../common/SelectBoxSearch";

const FormAddEditAssetItem = React.memo((props) => {
  const { selectedItem, selectedAsset, userList } = props;
  const [itemNo, setItemNo] = useState(0);
  const [itemModel, setItemModel] = useState("");
  const [itemUniqueId, setItemUniqueId] = useState("");
  const [itemModelNo, setItemModelNo] = useState("");
  const [itemUser, setItemUser] = useState(0);
  const [warrantyEndDate, setWarrantyEndDate] = useState("");
  const [warrentyFile, setWarrentyFile] = useState("");

  const [purchaseDate, setPurchaseDate] = useState("");
  const [vendor, setVendor] = useState("");

  useEffect(() => {
    // console.log(selectedItem);

    if (selectedAsset !== "") {
      setItemNo(selectedAsset.itemNo);
      setItemModel(selectedAsset.itemModel);
      setItemUniqueId(selectedAsset.uniqueIdentificationNumber);
      setItemModelNo(selectedAsset.modelNo);
      setVendor(selectedAsset.vendor);
      setPurchaseDate(selectedAsset.purchaseDate.substring(0, 10));
      setWarrantyEndDate(selectedAsset.warrantyEndDate.substring(0, 10));
      let assignedUser = userList.filter(
        (emp) => emp.value.employeeId === selectedAsset.employeeId
      );

      setItemUser(assignedUser.legth >= 0 ? assignedUser[0] : 0); // set user to search select box, took index cuz only one value will be there.
    } else {
      setItemNo(0);
      setItemModel("");
      setItemUniqueId("");
      setItemModelNo("");
      setVendor("");
      setItemUser(0);
      setPurchaseDate(
        `${new Date().getFullYear()}-0${new Date().getMonth()}-${new Date().getDate()}`
      );
      setWarrantyEndDate(
        `${new Date().getFullYear()}-0${new Date().getMonth()}-${new Date().getDate()}`
      );
    }
  }, [selectedItem, selectedAsset, userList]);

  // function
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let AssetFormData = new FormData();
    AssetFormData.set("itemNo", itemNo);
    AssetFormData.set(" itemId ", props.selectedItem.itemId);
    AssetFormData.set("itemModel", itemModel);
    AssetFormData.set("uniqueIdentificationNumber", itemUniqueId);
    AssetFormData.set("modelNo", itemModelNo);
    AssetFormData.set("purchaseDate", purchaseDate);
    AssetFormData.set("vendor", vendor);
    AssetFormData.set(" warentyDetails", "");
    AssetFormData.set("warrantyEndDate", warrantyEndDate);
    AssetFormData.set(
      " employeeId",
      itemUser !== 0 ? itemUser.value.employeeId : 0
    );
    AssetFormData.append("WarrantyFileUpload", warrentyFile);
    // console.log(warrentyFile);
    // warrentyFileData.append("file", warrentyFile);

    // let AssetFormData = {
    //   itemNo: itemNo,
    //   itemId: props.selectedItem.itemId,
    //   itemModel: itemModel,
    //   uniqueIdentificationNumber: itemUniqueId,
    //   modelNo: itemModelNo,
    //   purchaseDate: purchaseDate,
    //   vendor: vendor,
    //   warentyDetails: "",
    //   warrantyEndDate: warrantyEndDate,
    //   employeeId: itemUser !== 0 ? itemUser.value.employeeId : 0,
    //   // WarrantyFileUpload: warrentyFile !== "" ? warrentyFile[0].name : "", //file name.
    // };

    if (selectedAsset !== "") {
      props.handleUpdateAsset(AssetFormData);
    } else {
      console.log(AssetFormData);
      props.handleAddAsset(AssetFormData);
    }
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Asset</Label>
            <Input type="text" value={props.selectedItem.itemName} disabled />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Item No</Label>
            <Input type="text" value={props.selectedItem.itemId} disabled />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Item Model</Label>
            <Input
              type="text"
              placeholder="Enter Item Model"
              value={itemModel}
              onChange={(e) => setItemModel(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Unique ID</Label>
            <Input
              type="text"
              name="uniquieId"
              placeholder="Enter Unique ID"
              value={itemUniqueId}
              onChange={(e) => setItemUniqueId(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Model No</Label>
            <Input
              type="text"
              name="modelNo"
              placeholder="Enter Model No"
              value={itemModelNo}
              onChange={(e) => setItemModelNo(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Vendor</Label>
            <Input
              type="text"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>User</Label>
                <SelectBoxSearch
                  selectedUser={itemUser}
                  options={userList}
                  onChange={(selectedOption) => setItemUser(selectedOption)}
                ></SelectBoxSearch>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Purchase Date</Label>
                <Input
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Warranty End Date</Label>
                <Input
                  type="date"
                  value={warrantyEndDate}
                  onChange={(e) => setWarrantyEndDate(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Warrenty File</Label>
                <Input
                  type="file"
                  onChange={(e) => setWarrentyFile(e.target.files[0])}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button
            type="submit"
            color=""
            className="btn-admin-settings"
            onClick={handleFormSubmit}
          >
            {selectedAsset !== "" ? "Update" : "Add"}
          </Button>
          &nbsp;
          <Button color="" className="btn-cancel" onClick={props.handleCancel}>
            cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
});

export default FormAddEditAssetItem;
