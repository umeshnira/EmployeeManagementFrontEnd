import { GET_SELECTED_ASSET } from "../../actions/actionType";

const initialState = {
  assetSelected: null,
  // user list.
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SELECTED_ASSET:
      return {
        ...state,
        assetSelected: action.payload,
      };
    default:
      return state;
  }
}
