import React, { useState, Fragment, useEffect, useCallback } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { getEmpList } from "../../../redux/actions/employee/employee.action";
import { getItemsList } from "../../../redux/actions/items/items.action";
import {
  getAllAsset,
  addAsset,
  delAsset,
} from "../../../redux/actions/adminSettings/adminSettings.action";
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

const Assets = (props) => {
  const { getEmpList, getItemsList, getAllAsset, addAsset, delAsset } = props;

  const { assetList } = props.assetList; // from reducer.
  const { itemList } = props.itemList;
  const { empList } = props.empList; // user list.
  const [dataArr, setDataArr] = useState([]);
  const [assets, setAssets] = useState([]);
  const [items, setItems] = useState([]);
  const [assetName, setAssetName] = useState("");

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
        setAssetName(val);
      },
    },
  ]);

  useEffect(() => {
    getItemsList();
    getAllAsset();
    getEmpList();
  }, [getItemsList, getAllAsset, getEmpList]);

  useEffect(() => {
    setDataArr(assetArr);
  }, []);

  // when itemList chanegs
  useEffect(() => {
    setItems(itemList);
  }, [itemList]);
  // Function -------------------

  const toggleFromGridViews = useCallback(() => {
    // setIsOpenListView(!isOpenListView);
    setIsOpenGridView((prevState) => !prevState);
    setIsOpenAssetItems((prevState) => !prevState);
    // setIsOpenForm(false);
  }, [setIsOpenGridView, setIsOpenAssetItems]);

  const toggleFromGridViewsAddBtn = useCallback(() => {
    // setIsOpenListView(!isOpenListView);
    setIsOpenGridView((prevState) => !prevState);
    setIsOpenForm((prevState) => !prevState);
  }, [setIsOpenGridView, setIsOpenForm]);

  //  on click the tile ,open the listAssetItem with data filed.
  const handleSelectedAsset = useCallback(
    (val, id) => {
      console.log(val);
      let assetArr = assetList.filter((el) => el.itemId === val.itemId);

      console.log(assetArr);
      setSelectedAsset(assetArr);

      // setSelectedAsset(val);
    },
    [assetList]
  );

  // handle Delete asset by itemNo.
  const handleDelAsset = React.useCallback(
    (delId) => {
      delAsset(delId);
    },
    [delAsset]
  );

  //   handle asset item edit click from listAssetItem.js
  const handleEditAssetItem = (assetItemInfo, i) => {
    setAssetName(selectedAsset.asset);

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
  const handleAddItemsToAsset = (formData) => {
    console.log(formData);
    addAsset(formData);
  };

  return (
    <div>
      {/* ------------------------ Top Row--------------------- */}
      <Row>
        <Col>
          {isOpenFormAssetAddItems ? (
            // <h3>Add Item to {selectedAsset.asset} </h3>
            <h3>Add Item to </h3>
          ) : (
            <h3>
              {/* Assets {selectedAsset !== "" ? `-> ${selectedAsset.asset}` : ""}{" "} */}
              Assets
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

      {/* AssetsTabs have tabs of All Assets and Employee Assets. */}
      {isOpenGridView ? (
        <AssetsTabs
          assets={dataArr}
          itemList={items}
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
          userList={empList}
          handleEditAssetItem={handleEditAssetItem}
          handleDelAsset={handleDelAsset}
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

      {/* show edit and add asset item form */}
      {isOpenFormAssetAddItems ? (
        <FormAddEditAssetItem
          userList={empList}
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
  assetList: state.adminSettingReducer,
  empList: state.empReducer,
  itemList: state.itemReducer,
});

export default connect(mapStateToProps, {
  getEmpList,
  getItemsList,
  getAllAsset,
  addAsset,
  delAsset,
})(Assets);
