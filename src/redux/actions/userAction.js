import { ActionTypes } from "../contants/action-types";

export const setUserDeatils = (userDeatils) => {
  return {
    type: ActionTypes.SET_USER_DETAILS,
    payload: userDeatils,
  };
};
