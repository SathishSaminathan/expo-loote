import { ADD_USER } from "./actionTypes";

export const serUser = user => {
  return {
    type: ADD_USER,
    payload: {
      current_user: user
    }
  };
};
