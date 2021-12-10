import {
  NORTHINDIANVALUESTATUS,
  SOUTHINDIANVALUESTATUS,
  PANASIANVALUESTATUS,
  CONTINENTALVALUESTATUS,
  BENGALIVALUESTATUS,
  NORTHINDIANCHINESEVALUESTATUS,
  NORTHINDIANCONTIVALUESTATUS,
  MULTICUISINEVALUESTATUS,
} from "../Constant/cuisineConstant";

const initialState = {
  value: "",
  defaultChecked: false,
};

const cuisineReducer = (state = initialState, action) => {
  if (action.type === NORTHINDIANVALUESTATUS) {
    return {
      ...state,
      value: "Indian",
      defaultChecked: true,
    };
  } else if (action.type === SOUTHINDIANVALUESTATUS) {
    return {
      ...state,
      value: "SouthIndian",
      defaultChecked: true,
    };
  } else if (action.type === PANASIANVALUESTATUS) {
    return {
      ...state,
      value: "PanAsian",
      defaultChecked: true,
    };
  } else if (action.type === CONTINENTALVALUESTATUS) {
    return {
      ...state,
      value: "Continental",
      defaultChecked: true,
    };
  } else if (action.type === BENGALIVALUESTATUS) {
    return {
      ...state,
      value: "Bengali",
      defaultChecked: true,
    };
  } else if (action.type === NORTHINDIANCHINESEVALUESTATUS) {
    return {
      ...state,
      value: `Indian && PanAsian`,
      defaultChecked: true,
    };
  } else if (action.type === NORTHINDIANCONTIVALUESTATUS) {
    return {
      ...state,
      value: `Indian && Continental`,
      defaultChecked: true,
    };
  } else if (action.type === MULTICUISINEVALUESTATUS) {
    return {
      ...state,
      value: "Multicuisine",
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default cuisineReducer;
