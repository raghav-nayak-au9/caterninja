import {
  MEALVEGVALUESTATUS,
  MEALNONVEGVALUESTATUS,
} from "../Constant/mealConstant";

const initialState = {
  defaultChecked: false,
  value: null,
};

const mealReducer = (state = initialState, action) => {
  if (action.type === MEALVEGVALUESTATUS) {
    return {
      ...state,
      value: "veg",
      defaultChecked: true,
    };
  } else if (action.type === MEALNONVEGVALUESTATUS) {
    return {
      ...state,
      value: "nonveg",
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default mealReducer;
