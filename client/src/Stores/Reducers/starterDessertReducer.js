import { STARTERVALUESTATUS } from "../../Stores/Constant/starterDessertConstant";

const initialState = {
  starter_data: [], //one time activity
  selected_starter_data: [], //pushing on every starterHandler
  dessert_data: [],
  selected_dessert_data: [],
};

const starterDessertReducer = (state = initialState, action) => {
  const star_data = action.payload === undefined ? null : action.payload;

  if (action.type === STARTERVALUESTATUS) {
    return {
      ...state,
      starter_data: star_data,
    };
  }
  return state;
};

export default starterDessertReducer;
