import {
  MUMBAICITYVALUESTATUS,
  BANGALORECITYVALUESTATUS,
  DELHICITYVALUESTATUS,
  GURGAONCITYVALUESTATUS,
} from "../Constant/cityConstant";

const initialState = {
  value: null,
  defaultChecked: false,
};

const cityReducer = (state = initialState, action) => {
  if (action.type === MUMBAICITYVALUESTATUS) {
    return {
      ...state,
      value: "mumbai",
      defaultChecked: true,
    };
  } else if (action.type === BANGALORECITYVALUESTATUS) {
    return {
      ...state,
      value: "bangalore",
      defaultChecked: true,
    };
  } else if (action.type === DELHICITYVALUESTATUS) {
    return {
      ...state,
      value: "delhi",
      defaultChecked: true,
    };
  } else if (action.type === GURGAONCITYVALUESTATUS) {
    return {
      ...state,
      value: "gurgaon",
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default cityReducer;
