import {
  GET_DESIGNATION,
  ADD_DESIGINATION,
  UPDATE_DESIGNATION,
  DEL_DESIGNATION,
  GET_DEPARTMENT,
  ADD_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  // ---------------
  GET_OFFICELOCATION,
  ADD_OFFICELOCATION,
  DEL_OFFICELOCATION,
  // ----------------
  GET_WORKPRIMISE,
  ADD_WORKPRIMISE,
  UPDATE_WORKPRIMISE,
  DEL_WORKPRIMISE,
  // ---------------
  GET_REWARDS,
  ADD_REWARDS,
  UPDATE_REWARDS,
  DEL_REWADRDS,
  // ---------------
  GET_ASSET,
  ADD_ASSET,
  UPDATE_ASSET,
  DEL_ASSET,
} from "../actionType";
import { workPrimiseData } from "../../../datas/adminSettings";

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

// --------------Department----------//
export const getDepartment = () => {
  return {
    type: GET_DEPARTMENT,
  };
};
export const addDepartment = (formData) => {
  return {
    type: ADD_DEPARTMENT,
    payload: formData,
  };
};
export const updateDepartment = (formData) => {
  return {
    type: UPDATE_DEPARTMENT,
    payload: formData,
  };
};

export const delDepartment = (delId) => {
  return {
    type: DELETE_DEPARTMENT,
    payload: delId,
  };
};

// ----------------Work Primise.
export const getWorkPrimise = () => {
  return {
    type: GET_WORKPRIMISE,
    // payload: workPrimiseData,
  };
};
export const addWorkPrimise = (formData) => {
  return {
    type: ADD_WORKPRIMISE,
    payload: formData,
  };
};
export const updateWorkPrimise = (formData) => {
  return {
    type: UPDATE_WORKPRIMISE,
    payload: formData,
  };
};
export const delWorkPrimise = (delId) => {
  return {
    type: DEL_WORKPRIMISE,
    payload: delId,
  };
};

// ----------------- Rwards.
export const getRewards = () => {
  return {
    type: GET_REWARDS,
  };
};
export const addRewards = (formData) => {
  return {
    type: ADD_REWARDS,
    payload: formData,
  };
};
export const updateRewards = (formData) => {
  return {
    type: UPDATE_REWARDS,
    payload: formData,
  };
};
export const delRewards = (delId) => {
  return {
    type: DEL_REWADRDS,
    payload: delId,
  };
};

// ----------------Asset.
export const getAllAsset = () => {
  return {
    type: GET_ASSET,
  };
};
export const addAsset = (formData) => {
  return {
    type: ADD_ASSET,
    payload: formData,
  };
};
export const updateAsset = (formDate) => {
  return {
    type: UPDATE_ASSET,
    payload: formDate,
  };
};
export const delAsset = (delId) => {
  return {
    type: DEL_ASSET,
    payload: delId,
  };
};
