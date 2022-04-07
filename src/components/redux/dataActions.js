import {
  ADD_EMAIL,
  ADD_FN,
  ADD_PASSWORD,
  USER,
  USER_ID,
  ADD_LN,
  ADD_TODO,
  ADD_DATE,
  ADD_COLOR,
  USER_EMAIL,
} from "./dataTypes";

export const addfn = (event) => {
  return {
    type: ADD_FN,
    payload: event,
  };
};

export const addln = (e) => {
  return {
    type: ADD_LN,
    payload: e,
  };
};

export const addtodo = (e) => {
  return {
    type: ADD_TODO,
    payload: e,
  };
};

export const adddate = (e) => {
  return {
    type: ADD_DATE,
    payload: e,
  };
};

export const addcolor = (e) => {
  return {
    type: ADD_COLOR,
    payload: e,
  };
};

export const addemail = (e) => {
  return {
    type: ADD_EMAIL,
    payload: e,
  };
};

export const addpassword = (e) => {
  return {
    type: ADD_PASSWORD,
    payload: e,
  };
};

export const user = (e) => {
  return {
    type: USER,
    payload: e,
  };
};

export const userid = (e) => {
  return {
    type: USER_ID,
    payload: e,
  };
};

export const useremail = (e) => {
  return {
    type: USER_EMAIL,
    payload: e,
  };
};
