import { SET_NAME, SET_PHOTO } from "../actions/actionsTypes";
const initial = {
  userInfo: "",
  userPhoto:""
};
const SetNameReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, action.payload);
    case SET_PHOTO:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default SetNameReducer;
