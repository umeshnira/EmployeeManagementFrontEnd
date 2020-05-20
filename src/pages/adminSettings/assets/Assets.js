import React, { useState, Fragment, useEffect, useCallback } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { getEmpList } from "../../../redux/actions/employee/employee.action";
import { Button, Row, Col } from "reactstrap";

import {
  ListAssetItem,
  FormAddEditAssetItem,
  AssetsTabs,
} from "../../../components/adminSettings/assets/index";
import FormFields from "../../../components/adminSettings/FormFields";

const assetArr = [
  // ------------ 1st asset details
  {
    asset: "mouse",
    assetItems: [
      {
        itemNo: uuid(),
        itemDescription: "Hp mouse",
        uniqueId: "#22009",
        modelNo: "*12000293838",
        purchaseDate: "2019-09-20",
        vendor: "Donald",
        warentyEndDate: "2022-09-20",
        user: "Jerry",
      },
      {
        itemNo: uuid(),
        itemDescription: "Mac mouse",
        uniqueId: "#255009",
        modelNo: "*183830293838",
        purchaseDate: "2019-09-20",
        vendor: "Donald",
        warentyEndDate: "2022-09-20",
        user: "Tom",
      },
      {
        itemNo: uuid(),
        itemDescription: "Samsung mouse",
        uniqueId: "#9009",
        modelNo: "*oi830293838",
        purchaseDate: "2019-09-20",
        vendor: "Donald",
        warentyEndDate: "2022-09-20",
        user: "",
      },
    ],
  },
  // ------------ 2nd asset details
  {
    asset: "keyboard",
    assetItems: [
      {
        itemNo: uuid(),
        itemDescription: "lenova Keyboard",
        uniqueId: "#22ssda",
        modelNo: "*12ooo93838",
        purchaseDate: "2019-09-20",
        vendor: "Donald",
        warentyEndDate: "2022-09-20",
        user: "Micky",
      },
      {
        itemNo: uuid(),
        itemDescription: "Mac keyboard",
        uniqueId: "#255009",
        modelNo: "*183830293838",
        purchaseDate: "2019-09-20",
        vendor: "Donald",
        warentyEndDate: "2022-09-20",
        user: "Mouse",
      },
      {
        itemNo: uuid(),
        itemDescription: "Samsung keyboard",
        uniqueId: "#9009",
        modelNo: "*oi830293838",
        purchaseDate: "2019-09-20",
        vendor: "Donald",
        warentyEndDate: "2022-09-20",
        user: "Tom",
      },
    ],
  },
];

// Data for  list view.
// const thead = [
//   "Item",
//   "Item No",
//   "Item Description",
//   "Unique ID",
//   "Model No",
//   "Assignee",
// ];

const Assets = (props) => {
  const { getEmpList } = props;

  const { assetSelected } = props.selectedAsset; // from reducer.
  const { empList } = props.empList; // user list.

  const [dataArr, setDataArr] = useState([]);
  const [assetName, setAssetName] = useState("");
  const [itemNo, setItemNo] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemUniqueId, setItemUniqueId] = useState("");
  const [itemModelNo, setItemModelNo] = useState("");
  const [itemUser, setItemUser] = useState("");

  const [selectedAsset, setSelectedAsset] = useState("");

  const [isOpenGridView, setIsOpenGridView] = useState(true);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenAssetItems, setIsOpenAssetItems] = useState(false);
  const [isOpenFormAssetAddItems, setIsOpenFormAssetAddItems] = useState(false);
  // --------------------------------------------------------------------
  const [assetInpuFields] = useState([
    {
      label: "Asset Name",
      type: "text",
      placeholder: "Enter Asset Name",
      name: "type1", // this name should be equal to the designation array key's.
      handleOnChange: (val) => {
        console.log(val);
        setAssetName(val);
      },
    },
  ]);

  useEffect(() => {
    setDataArr(assetArr);
  }, []);
  // Function -------------------

  const toggleFromGridViews = useCallback(() => {
    // setIsOpenListView(!isOpenListView);
    setIsOpenGridView((prevState) => !prevState);
    setIsOpenAssetItems((prevState) => !prevState);
    // setIsOpenForm(false);
  }, [setIsOpenGridView, setIsOpenAssetItems]);

  const toggleFromGridViewsAddBtn = useCallback(() => {
    console.log("toggleFromForm");
    // setIsOpenListView(!isOpenListView);
    setIsOpenGridView((prevState) => !prevState);
    setIsOpenForm((prevState) => !prevState);
  }, [setIsOpenGridView, setIsOpenForm]);

  //  on click the tile ,open the listAssetItem with data filed.
  const handleSelectedAsset = useCallback((val, id) => {
    setSelectedAsset(val);
    // props.getSelectedAsset(val);
    //   setSelectedData("yoyo");
  }, []);

  //   handle asset item edit click from listAssetItem.js
  const handleEditAssetItem = (assetItemInfo, i) => {
    console.log(assetSelected);
    setAssetName(selectedAsset.asset);
    setItemNo(assetItemInfo.itemNo);
    setItemDescription(assetItemInfo.itemDescription);
    setItemUniqueId(assetItemInfo.uniqueId);
    setItemModelNo(assetItemInfo.modelNo);
    setItemUser(assetItemInfo.user);
    setIsOpenAssetItems(false);
    setIsOpenFormAssetAddItems(true);
  };

  //   handle add asset
  const handleAssetAdd = (e) => {
    e.preventDefault();
    console.log(assetName);
    setIsOpenForm(false);
    setIsOpenGridView(true);
  };

  //   handle asset item add.
  const handleAddItemsToAsset = (e) => {
    e.preventDefault();
    console.log(selectedAsset.asset);
    console.log(itemNo); // array length +1
    console.log(itemDescription);
    console.log(itemModelNo);
    console.log(itemUniqueId);
    console.log(itemUser);
  };

  useEffect(() => {
    // to get the user list.
    getEmpList();
  }, [getEmpList]);

  return (
    <div>
      {/* ------------------------ Top Row--------------------- */}
      <Row>
        <Col>
          {isOpenFormAssetAddItems ? (
            <h3>Add Item to {selectedAsset.asset} </h3>
          ) : (
            <h3>
              Assets {selectedAsset !== "" ? `-> ${selectedAsset.asset}` : ""}{" "}
            </h3>
          )}
        </Col>
        <Col>
          {/* back button */}
          {isOpenAssetItems ? (
            <Fragment>
              <Button
                color=""
                className="btn-admin-settings float-right"
                onClick={() => {
                  setIsOpenGridView(true);
                  setIsOpenAssetItems(false);
                  setSelectedAsset(""); // on back set the selected data empty
                }}
              >
                <i className="fas fa-arrow-left  "></i>
              </Button>
              <Button
                color=""
                className="btn-admin-settings float-right"
                onClick={() => {
                  setIsOpenFormAssetAddItems(true);
                  setIsOpenAssetItems(false);
                }}
              >
                <i className="fas fa-plus"></i>
              </Button>
            </Fragment>
          ) : null}
        </Col>
      </Row>
      {/* ------------------------ Top Row---------------------- */}
      <hr></hr>

      {/* AssetsTabs had tab of All Assets and Employee Assets. */}
      {isOpenGridView ? (
        <AssetsTabs
          assets={dataArr}
          openAssetItem={toggleFromGridViews}
          openAddForm={toggleFromGridViewsAddBtn}
          handleSelectedAsset={handleSelectedAsset}
          userList={empList}
        ></AssetsTabs>
      ) : null}
      {/* show the items corresponding to an asset. */}
      {isOpenAssetItems ? (
        <ListAssetItem
          assetData={selectedAsset}
          isOpen={isOpenAssetItems}
          handleEditAssetItem={handleEditAssetItem}
        ></ListAssetItem>
      ) : null}

      {/* show add asset form */}
      {isOpenForm ? (
        <FormFields
          inputFields={assetInpuFields}
          handleSubmit={handleAssetAdd}
          button={"Add"}
          toggle={toggleFromGridViewsAddBtn}
        ></FormFields>
      ) : null}

      {/* show add asset item form */}
      {isOpenFormAssetAddItems ? (
        <FormAddEditAssetItem
          userList={empList}
          formData={{
            itemNo,
            itemDescription,
            itemUniqueId,
            itemModelNo,
            itemUser,
          }}
          setAssetName={(val) => setAssetName(val)}
          itemNo={selectedAsset.assetItems.length}
          setItemDescription={(val) => setItemDescription(val)}
          setItemModelNo={(val) => setItemModelNo(val)}
          setItemUniqueId={(val) => setItemUniqueId(val)}
          setItemUser={(val) => {
            setItemUser(val);
          }}
          handleSubmit={handleAddItemsToAsset}
          handleCancel={() => {
            setIsOpenFormAssetAddItems(false);
            setIsOpenAssetItems(true);
          }}
        ></FormAddEditAssetItem>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedAsset: state.assetReducer,
  empList: state.empReducer,
});

export default connect(mapStateToProps, { getEmpList })(Assets);
