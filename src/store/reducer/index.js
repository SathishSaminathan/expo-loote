import * as actionTypes from "../actions/actionTypes";
import { combineReducers } from "redux";

const initalState = {
  current_user: null
};

const user_reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        current_user: action.payload.current_user
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        current_user: action.payload.current_user
      };
    case actionTypes.REMOVE_USER:
      debugger
      return {
        ...state,
        current_user: null
      };
    default:
      return state;
  }
};

const root_reducer = combineReducers({
  user: user_reducer
});

export default root_reducer;
