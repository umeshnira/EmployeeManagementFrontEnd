import {
  GET_SELECTED_ASSET,
  ADD_DESIGINATION_SUCCESS,
  GET_DESIGNATION_SUCCESS,
  DEL_DESIGNATION_SUCCESS,
  GET_REWARDS,
  GET_OFFICELOCATION_SUCCESS,
  ADD_OFFICELOCATION_SUCCESS,
  GET_WORKPRIMISE_SUCCESS,
  UPDATE_OFFICELOCATION_SUCCESS,
  DEL_OFFICELOCATION_SUCCESS,
  ADD_WORKPRIMISE_SUCCESS,
} from "../../actions/actionType";

const initialState = {
  assetSelected: null,
  desiginations: [],
  workPrimisesList: [],
  rewards: [],
  officeLocation: [],
  // user list.
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    // case UPDATE_DESIGNATION_SUCCESS:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     desiginations: state.desiginations.filter((el, i) =>
    //       i === action.payload.id ? action.payload.val : el
    //     ),
    //   };
    // case DEL_DESIGNATION_SUCCESS:
    //   return {
    //     ...state,
    //     desiginations: state.desiginations.filter(
    //       (el) => el.deignationId !== action.payload
    //     ),
    //   };
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
    case GET_REWARDS:
      return {
        ...state,
        rewards: action.payload,
      };
    case GET_SELECTED_ASSET:
      return {
        ...state,
        assetSelected: action.payload,
      };
    default:
      return state;
  }
}
