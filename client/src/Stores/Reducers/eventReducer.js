import { EVENTVALUESTATUS } from "../Constant/eventdateConstant";

const initialState = {
  date_value: "",
  defaultChecked: false,
};

const eventReducer = (state = initialState, action) => {
  const curr_date = action.payload === undefined ? null : action.payload;

  if (action.type === EVENTVALUESTATUS) {
    return {
      ...state,
      date_value: curr_date,
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default eventReducer;
