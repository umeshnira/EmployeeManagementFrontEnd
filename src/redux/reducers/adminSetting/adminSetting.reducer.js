import {
  GET_SELECTED_ASSET,
  ADD_DESIGINATION_SUCCESS,
  GET_DESIGNATION_SUCCESS,
  UPDATE_DESIGNATION_SUCCESS,
  DEL_DESIGNATION_SUCCESS,
  GET_WORKPRIMISE,
  GET_REWARDS,
} from "../../actions/actionType";

const initialState = {
  assetSelected: null,
  desiginations: [],
  workPrimises: [],
  rewards: [],
  // user list.
};

export default function (state = initialState, action) {
  switch (action.type) {
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
      console.log(action.payload);
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
          (el, i) => i !== action.payload
        ),
      };
    case GET_WORKPRIMISE:
      return {
        ...state,
        workPrimises: action.payload,
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
