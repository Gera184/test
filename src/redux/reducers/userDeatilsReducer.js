import { ActionTypes } from "../contants/action-types";

const initialState = {
  arr: [],
};

export const userDeatilsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_DETAILS:
      return { payload };

    default:
      return state;
  }
};
