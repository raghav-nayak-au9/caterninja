import { CURRENTDATASTATUS } from "../Constant/dataConstant";

const initialState = {
  data: null,
};

const dataReducer = (state = initialState, action) => {
  const filteredData = action.payload === undefined ? null : action.payload;

  if (action.type === CURRENTDATASTATUS) {
    return {
      ...state,
      data: filteredData,
    };
  } else {
    return state;
  }
};

export default dataReducer;
