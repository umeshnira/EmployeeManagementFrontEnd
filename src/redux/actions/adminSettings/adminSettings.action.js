import {
  GET_SELECTED_ASSET,
  GET_DESIGNATION,
  ADD_DESIGINATION,
  UPDATE_DESIGNATION,
  DEL_DESIGNATION,
  GET_WORKPRIMISE,
  GET_REWARDS,
} from "../actionType";
import { workPrimiseData, rewardData } from "../../../datas/adminSettings";

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

// ----------------Work Primise.
export const getWorkPrimise = () => {
  // make the api call here.
  return {
    type: GET_WORKPRIMISE,
    payload: workPrimiseData,
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
