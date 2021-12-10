import "./Mealtype.css";
import { useDispatch, useSelector } from "react-redux";
import {
  MEALVEGVALUESTATUS,
  MEALNONVEGVALUESTATUS,
} from "../../Stores/Constant/mealConstant";
import { mealData } from "../../Stores/Actions/dataAction";
import { CURRENTDATASTATUS } from "../../Stores/Constant/dataConstant";

const Mealtype = () => {
  const dispatch = useDispatch();

  const vegHandler = () => {
    dispatch({ type: MEALVEGVALUESTATUS });
  };

  const nonvegHandler = () => {
    dispatch({ type: MEALNONVEGVALUESTATUS });
  };

  const mealSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await mealData({ city: cityValue, preference: mealValue });
      // console.log(res.data.data1);
      dispatch({ type: CURRENTDATASTATUS, payload: res.data.data1 });
    } catch (err) {
      console.log("Error", err);
    }
  };

  const mealChecked = useSelector((state) => state.mealReducer.defaultChecked);
  console.log("MEAL_CHECK : ", mealChecked);
  const mealValue = useSelector((state) => state.mealReducer.value);
  console.log("MEAL_PREFERENCE_VALUE : ", mealValue);
  const cityValue = useSelector((state) => state.cityReducer.value);
  console.log("CITY_VALUE : ", cityValue);
  const filteredMealPreferenceData = useSelector(
    (state) => state.dataReducer.data
  );
  console.log("FILTERED_PREFERENCE_DATA : ", filteredMealPreferenceData);

  return (
    <form className="form-meal" onSubmit={mealSubmitHandler}>
      <div>
        <h5 id="pref">Meal Type: </h5>
        <div>
          <button
            type="submit"
            className="btn-check"
            name="preference"
            id="veg"
            value="veg"
            autoComplete="off"
            // defaultChecked={this.state.preference === "veg"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={vegHandler}
            required
          />
          <label id="ocn" className="btn-outline-warning" htmlFor="veg">
            Veg
          </label>

          <button
            type="submit"
            className="btn-check"
            name="preference"
            id="nonveg"
            value="nonveg"
            autoComplete="off"
            // defaultChecked={this.state.preference === "nonveg"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={nonvegHandler}
            required
          />
          <label id="ocn" className="btn-outline-warning" htmlFor="nonveg">
            Veg + NonVeg
          </label>
        </div>
      </div>
    </form>
  );
};

export default Mealtype;
