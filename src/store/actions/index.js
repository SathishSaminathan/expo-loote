import { ADD_USER, UPDATE_USER, REMOVE_USER } from "./actionTypes";

export const setUser = user => {
  return {
    type: ADD_USER,
    payload: {
      current_user: user
    }
  };
};

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: {
      current_user: user
    }
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};
