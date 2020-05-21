import {
  GET_SELECTED_ASSET,
  GET_DESIGNATION,
  ADD_DESIGINATION,
  UPDATE_DESIGNATION,
  DEL_DESIGNATION,
} from "../actionType";

// --------------Designation

export const getDesignation = () => {
  return {
    type: GET_DESIGNATION,
  };
};
export const addDesignation = (formData) => {
  return {
    type: ADD_DESIGINATION,
    payload: formData,
  };
};
export const updateDesignation = (formData) => {
  return {
    type: UPDATE_DESIGNATION,
    payload: formData,
  };
};

export const delDesignation = (delId) => {
  return {
    type: DEL_DESIGNATION,
    payload: delId,
  };
};

// ----------------Asset

export const getSelectedAsset = (assetData) => {
  return {
    type: GET_SELECTED_ASSET,
    payload: assetData,
  };
};
