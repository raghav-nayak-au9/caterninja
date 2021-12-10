import {
  FORM2STATUS,
  FORM3STATUS,
  FORM4STATUS,
} from "../Constant/formConstant";

const initialState = {
  visible2: false,
  visible3: false,
  visible4: false,
};

const formReducer = (state = initialState, action) => {
  if (action.type === FORM2STATUS) {
    return {
      ...state,
      visible2: true,
    };
  } else if (action.type === FORM3STATUS) {
    return {
      ...state,
      visible3: true,
    };
  } else if (action.type === FORM4STATUS) {
    return {
      ...state,
      visible4: true,
    };
  }
  return state;
};

export default formReducer;
