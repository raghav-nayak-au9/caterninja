import {
  BIRTHDAYPARTYVALUESTATUS,
  HOUSEPARTYVALUESTATUS,
  HOUSEWARMINGVALUESTATUS,
  PREWEDDINGVALUESTATUS,
  OFFICEPARTYVALUESTATUS,
  OTHERVALUESTATUS,
} from "../Constant/ocassionConstant";

const initialState = {
  defaultChecked: false,
};

const ocassionReducer = (state = initialState, action) => {
  if (action.type === BIRTHDAYPARTYVALUESTATUS) {
    return {
      ...state,
      defaultChecked: true,
    };
  } else if (action.type === HOUSEPARTYVALUESTATUS) {
    return {
      ...state,
      defaultChecked: true,
    };
  } else if (action.type === HOUSEWARMINGVALUESTATUS) {
    return {
      ...state,
      defaultChecked: true,
    };
  } else if (action.type === PREWEDDINGVALUESTATUS) {
    return {
      ...state,
      defaultChecked: true,
    };
  } else if (action.type === OFFICEPARTYVALUESTATUS) {
    return {
      ...state,
      defaultChecked: true,
    };
  } else if (action.type === OTHERVALUESTATUS) {
    return {
      ...state,
      defaultChecked: true,
    };
  } else {
    return state;
  }
};

export default ocassionReducer;
