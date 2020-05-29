import {
  GET_SELECTED_ASSET,
  // ---------------------
  GET_DESIGNATION_SUCCESS,
  ADD_DESIGINATION_SUCCESS,
  UPDATE_DESIGNATION_SUCCESS,
  DEL_DESIGNATION_SUCCESS,
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
} from "../../actions/actionType";

const initialState = {
  assetSelected: null,
  departments: [],
  desiginations: [],
  workPrimisesList: [],
  rewards: [],
  officeLocation: [],
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
        desiginations: action.payload,
      };
    case ADD_DESIGINATION_SUCCESS:
      return {
        ...state,
        desiginations: [...state.desiginations, action.payload],
      };
    case UPDATE_DESIGNATION_SUCCESS:
      return {
        ...state,
        desiginations: state.desiginations.filter((el, i) =>
          i === action.payload.id ? action.payload.val : el
        ),
      };
    case DEL_DESIGNATION_SUCCESS:
      return {
        ...state,
        desiginations: state.desiginations.filter(
          (el) => el.deignationId !== action.payload
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
    case GET_SELECTED_ASSET:
      return {
        ...state,
        assetSelected: action.payload,
      };
    default:
      return state;
  }
}
