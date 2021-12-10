import {
  MAINSVALUESTATUS,
  STARTERMAINSVALUESTATUS,
} from "../Constant/iwantConstant";

const initialState = {
  value: "",
  defaultChecked: false,
};

const iwantReducer = (state = initialState, action) => {
  if (action.type === MAINSVALUESTATUS) {
    return {
      ...state,
      value: "mains",
      defaultChecked: true,
    };
  } else if (action.type === STARTERMAINSVALUESTATUS) {
    return {
      ...state,
      value: `starters && mains`,
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default iwantReducer;
