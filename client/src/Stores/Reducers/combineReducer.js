import { combineReducers } from "redux";
import formReducer from "../Reducers/formReducer";
import cityReducer from "../Reducers/cityReducer";
import dataReducer from "../Reducers/dataReducer";
import ocassionReducer from "../Reducers/ocassionReducer";
import mealReducer from "../Reducers/mealReducer";
import guestReducer from "../Reducers/guestReducer";
import eventReducer from "../Reducers/eventReducer";
import cuisineReducer from "../Reducers/cuisineReducer";
import iwantReducer from "../Reducers/iwantReducer";
// import courseReducer from "../Reducers/courseReducer";
import starterDessertReducer from "../Reducers/starterDessertReducer";

const reducers = combineReducers({
  formReducer,
  cityReducer,
  dataReducer,
  ocassionReducer,
  mealReducer,
  guestReducer,
  eventReducer,
  cuisineReducer,
  iwantReducer,
  // courseReducer,
  starterDessertReducer,
});

export default reducers;
