import { SET_NAME, SET_PHOTO } from "./actionsTypes";

export const setName = (value) => ({
  type: SET_NAME,
  payload: value,
})
export const setPhoto = (value) => ({
  type: SET_PHOTO,
  payload: value,
})