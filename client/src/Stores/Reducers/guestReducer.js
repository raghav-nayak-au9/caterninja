import { GUESTVALUESTATUS } from "../Constant/guestConstant";

const initialState = {
  value: "people",
  defaultChecked: false,
};

const guestReducer = (state = initialState, action) => {
  const count = action.payload === undefined ? null : action.payload;

  if (action.type === GUESTVALUESTATUS) {
    return {
      ...state,
      value: count,
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default guestReducer;
