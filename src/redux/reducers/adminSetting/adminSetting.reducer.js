import {
  // ---------------------
  GET_DESIGNATION_SUCCESS,
  ADD_DESIGINATION_SUCCESS,
  UPDATE_DESIGNATION_SUCCESS,
  DEL_DESIGNATION_SUCCESS,
  //----------------------
  GET_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_SUCCESS,
  // ---------------------
  GET_WORKPRIMISE_SUCCESS,
  ADD_WORKPRIMISE_SUCCESS,
  UPDATE_WORKPRIMISE_SUCCESS,
  DEL_WORKPRIMISE_SUCCESS,
  // ---------------------
  GET_OFFICELOCATION_SUCCESS,
  ADD_OFFICELOCATION_SUCCESS,
  UPDATE_OFFICELOCATION_SUCCESS,
  DEL_OFFICELOCATION_SUCCESS,
  // ---------------------
  GET_REWARDS_SUCCESS,
  ADD_REWARDS_SUCCESS,
  UPDATE_REWARDS_SUCCESS,
  DEL_REWADRDS_SUCCESS,
  // ---------------------
  GET_ASSET_SUCCESS,
  ADD_ASSET_SUCCESS,
  UPDATE_ASSET_SUCCESS,
  DEL_ASSET_SUCCESS,
  //---employee types
  GET_EMPLOYEETYPE_LIST_SUCCESS,
  GET_EMPLOYEETYPES_BY_ID_SUCCESS,
  ADD_EMPLOYEETYPE_SUCCESS,
  UPDATE_EMPLOYEETYPE_SUCCESS,
  DELETE_EMPLOYEETYPE_SUCCESS,
} from "../../actions/actionType";

const initialState = {
  assetSelected: null,
  departments: [],
  designations: [],
  workPrimisesList: [],
  rewards: [],
  officeLocation: [],
  assetList: [],
  // user list.
};

export default function (state = initialState, action) {
  switch (action.type) {
    // ----------------- Office Location.
    case GET_OFFICELOCATION_SUCCESS:
      return {
        ...state,
        officeLocation: action.payload,
      };
    case ADD_OFFICELOCATION_SUCCESS:
      return {
        ...state,
        officeLocation: [...state.officeLocation, action.payload],
      };
    case UPDATE_OFFICELOCATION_SUCCESS:
      return {
        ...state,
        officeLocation: state.officeLocation.map((officeLocation) =>
          officeLocation.officeLocationId === action.payload.officeLocationId
            ? action.payload
            : officeLocation
        ),
      };
    case DEL_OFFICELOCATION_SUCCESS:
      return {
        ...state,
        officeLocation: state.officeLocation.filter(
          (el) => el.officeLocationId !== action.payload
        ),
      };
    // ----------------- Designation.
    case GET_DESIGNATION_SUCCESS:
      return {
        ...state,
        designations: action.payload,
      };
    case ADD_DESIGINATION_SUCCESS:
      return {
        ...state,
        designations: [...state.designations, action.payload],
      };
    case UPDATE_DESIGNATION_SUCCESS:
      return {
        ...state,
        designations: state.designations.filter((el, i) =>
          i === action.payload.id ? action.payload.val : el
        ),
      };
    case DEL_DESIGNATION_SUCCESS:
      return {
        ...state,
        designations: state.designations.filter(
          (el) => el.designationId !== action.payload
        ),
      };
    //--------------------Department
    case GET_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: action.payload,
      };
    case ADD_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: [...state.departments, action.payload],
      };
    case UPDATE_DEPARTMENT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        departments: state.departments.filter((el, i) =>
          i === action.payload.id ? action.payload.val : el
        ),
      };
    case DELETE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: state.departments.filter(
          (el) => el.departmentId !== action.payload
        ),
      };
    // ----------------- Work Primise.
    case GET_WORKPRIMISE_SUCCESS:
      return {
        ...state,
        workPrimisesList: action.payload,
      };
    case ADD_WORKPRIMISE_SUCCESS:
      return {
        ...state,
        workPrimisesList: [...state.workPrimisesList, action.payload],
      };
    case UPDATE_WORKPRIMISE_SUCCESS:
      return {
        ...state,
        workPrimisesList: state.workPrimisesList.map((el) =>
          el.workingPremiseId === action.payload.workingPremiseId
            ? action.payload
            : el
        ),
      };
    case DEL_WORKPRIMISE_SUCCESS:
      return {
        ...state,
        workPrimisesList: state.workPrimisesList.filter(
          (el) => el.workingPremiseId !== action.payload
        ),
      };
    // ------------------------Rewards.
    case GET_REWARDS_SUCCESS:
      return {
        ...state,
        rewards: action.payload,
      };
    case ADD_REWARDS_SUCCESS:
      return {
        rewards: [...state.rewards, action.payload],
      };
    case UPDATE_REWARDS_SUCCESS:
      return {
        rewards: state.rewards.map((el) =>
          el.rewardId === action.payload.rewardId ? action.payload : el
        ),
      };
    case DEL_REWADRDS_SUCCESS:
      return {
        rewards: state.rewards.filter((el) => el.rewardId !== action.payload),
      };

    // ----------------- Asset.
    case GET_ASSET_SUCCESS:
      return {
        assetList: action.payload,
      };

    case ADD_ASSET_SUCCESS:
      return {
        assetList: [...state.assetList, action.payload],
      };
    case DEL_ASSET_SUCCESS:
      return {
        assetList: state.assetList.filter((el) => el.itemNo !== action.payload),
      };

    //----Employee Types---//
    case GET_EMPLOYEETYPE_LIST_SUCCESS:
      return {
        ...state,
        employeetypes: action.payload,
      };
    case GET_EMPLOYEETYPES_BY_ID_SUCCESS:
      return {
        ...state,
        employeetypes: action.payload,
      };
    case ADD_EMPLOYEETYPE_SUCCESS:
      return {
        ...state,
        employeetypes: [...state.employeetypes, action.payload],
      };
    case UPDATE_EMPLOYEETYPE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        employeetypes: state.employeetypes.filter((el, i) =>
          i === action.payload.id ? action.payload.val : el
        ),
      };
    case DELETE_EMPLOYEETYPE_SUCCESS:
      return {
        ...state,
        employeetypes: state.employeetypes.filter(
          (el) => el.employeeTypeId !== action.payload
        ),
      };

    default:
      return state;
  }
}
