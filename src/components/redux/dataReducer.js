import {
  ADD_FN,
  ADD_LN,
  ADD_TODO,
  ADD_DATE,
  ADD_COLOR,
  ADD_EMAIL,
  ADD_PASSWORD,
  USER,
  USER_ID,
  USER_EMAIL,
} from "./dataTypes";

const data = {
  firstName: "",
  lastName: "",
  date: "",
  todo: "",
  color: "",
  email: "",
  password: "",
  user: "",
  userid: "",
  useremail: "",
};

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case ADD_FN:
      return { ...state, firstName: action.payload };
    case ADD_LN:
      return { ...state, lastName: action.payload };
    case ADD_TODO:
      return { ...state, todo: action.payload };
    case ADD_DATE:
      return { ...state, date: action.payload };
    case ADD_COLOR:
      return { ...state, color: action.payload };
    case ADD_EMAIL:
      return { ...state, email: action.payload };
    case ADD_PASSWORD:
      return { ...state, password: action.payload };
    case USER:
      return { ...state, user: action.payload };
    case USER_ID:
      return { ...state, userid: action.payload };
    case USER_EMAIL:
      return { ...state, useremail: action.payload };
    default:
      return state;
  }
};
console.log(data.firstName);

export default dataReducer;
