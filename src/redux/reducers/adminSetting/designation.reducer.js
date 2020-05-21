import {
  ADD_DESIGINATION_SUCCESS,
  GET_DESGNATION_SUCCESS,
} from "../../actions/actionType";

const initialState = {
  desiginations: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DESGNATION_SUCCESS:
      return {
        desiginations: action.payload,
      };
    case ADD_DESIGINATION_SUCCESS:
      return {
        desiginations: action.payload,
      };
    default:
      return state;
  }
}
