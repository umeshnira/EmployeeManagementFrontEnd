import {
  GET_SELECTED_ASSET,
  GET_DESIGNATION,
  ADD_DESIGINATION,
  UPDATE_DESIGNATION,
  DEL_DESIGNATION,
  // ---------------
  GET_WORKPRIMISE,
  GET_REWARDS,
  // ---------------
  GET_OFFICELOCATION,
  ADD_OFFICELOCATION,
  DEL_OFFICELOCATION,
  ADD_WORKPRIMISE,
} from "../actionType";
import { workPrimiseData, rewardData } from "../../../datas/adminSettings";

// ------------Office Locaton.
export const getOfficeLocation = () => {
  return {
    type: GET_OFFICELOCATION,
  };
};
export const addOfficeLocation = (formData) => {
  return {
    type: ADD_OFFICELOCATION,
    payload: formData,
  };
};
export const updateOfficeLocation = (formData) => {
  return {
    type: UPDATE_DESIGNATION,
    payload: formData,
  };
};
export const delOfficeLoation = (delId) => {
  return {
    type: DEL_OFFICELOCATION,
    payload: delId,
  };
};

// --------------Designation.
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

// ----------------Work Primise.
export const getWorkPrimise = () => {
  return {
    type: GET_WORKPRIMISE,
    payload: workPrimiseData,
  };
};
export const addWOrkPrimise = (formData) => {
  return {
    type: ADD_WORKPRIMISE,
    payload: formData,
  };
};

// ----------------Asset.
export const getSelectedAsset = (assetData) => {
  return {
    type: GET_SELECTED_ASSET,
    payload: assetData,
  };
};

// ----------------Rewards.
export const getRewards = () => {
  // make the api call here.
  return {
    type: GET_REWARDS,
    payload: rewardData,
  };
};
