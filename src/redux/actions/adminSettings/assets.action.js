import { GET_SELECTED_ASSET } from "../actionType";

export const getSelectedAsset = (assetData) => {
  return {
    type: GET_SELECTED_ASSET,
    payload: assetData,
  };
};
