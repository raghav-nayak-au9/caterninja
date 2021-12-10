import "./Cuisines.css";
import {
  NORTHINDIANVALUESTATUS,
  SOUTHINDIANVALUESTATUS,
  PANASIANVALUESTATUS,
  CONTINENTALVALUESTATUS,
  BENGALIVALUESTATUS,
  NORTHINDIANCHINESEVALUESTATUS,
  NORTHINDIANCONTIVALUESTATUS,
  MULTICUISINEVALUESTATUS,
} from "../../Stores/Constant/cuisineConstant";
import { CURRENTDATASTATUS } from "../../Stores/Constant/dataConstant";
import { useDispatch, useSelector } from "react-redux";
import { cuisineData } from "../../Stores/Actions/dataAction";
import { toast } from "react-toastify";

const Cuisines = () => {
  const dispatch = useDispatch();

  const northIndianHandler = () => {
    dispatch({ type: NORTHINDIANVALUESTATUS });
  };

  const southIndianHandler = () => {
    dispatch({ type: SOUTHINDIANVALUESTATUS });
  };

  const panAsianHandler = () => {
    dispatch({ type: PANASIANVALUESTATUS });
  };

  const contiHandler = () => {
    dispatch({ type: CONTINENTALVALUESTATUS });
  };

  const bengaliHandler = () => {
    dispatch({ type: BENGALIVALUESTATUS });
  };

  const northIndianandpanAsianHandler = () => {
    dispatch({ type: NORTHINDIANCHINESEVALUESTATUS });
  };

  const northIndianandContiHandler = () => {
    dispatch({ type: NORTHINDIANCONTIVALUESTATUS });
  };

  const multiHandler = () => {
    dispatch({ type: MULTICUISINEVALUESTATUS });
  };

  const mealValue = useSelector((state) => state.mealReducer.value);
  console.log("MEAL_PREFERENCE_VALUE : ", mealValue);
  const cityValue = useSelector((state) => state.cityReducer.value);
  console.log("CITY_VALUE : ", cityValue);
  const cuisine_value = useSelector((state) => state.cuisineReducer.value);
  console.log("SELECTED_CUISINE", cuisine_value);
  const cuisine_check = useSelector(
    (state) => state.cuisineReducer.defaultChecked
  );
  console.log("CUISINE_CHECK", cuisine_check);
  const filteredCuisineData = useSelector((state) => state.dataReducer.data);
  console.log("CUISINE_FILTERED_DATA : ", filteredCuisineData);

  const cuisineSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await cuisineData({
        city_value: cityValue,
        meal_preference: mealValue,
        cuisine: cuisine_value,
      });
      // console.log(res.data);
      if (res.data.data1.length > 0) {
        dispatch({ type: CURRENTDATASTATUS, payload: res.data.data1 });
      } else {
        toast.error(
          "Please refine your search as no cuisines are available for this search"
        );
        dispatch({ type: CURRENTDATASTATUS, payload: null });
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  // console.log(cuisine_value);

  return (
    <form className="form-cuisine" onSubmit={cuisineSubmitHandler}>
      <div>
        <div id="cuz">Cuisine</div>
        <div className="ddo">
          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="Indian"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "Indian"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={northIndianHandler}
            required
          />
          <label id="occ" className="btn-outline-warning" htmlFor="Indian">
            North Indian
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="SouthIndian"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "SouthIndian"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={southIndianHandler}
            required
          />
          <label id="occ" className="btn-outline-warning" htmlFor="SouthIndian">
            South Indian
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="PanAsian"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "PanAsian"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={panAsianHandler}
            required
          />
          <label id="occ" className="btn-outline-warning" htmlFor="PanAsian">
            Pan Asian
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="Continential"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "Continential"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={contiHandler}
            required
          />
          <label
            id="occ"
            className="btn-outline-warning"
            htmlFor="Continential"
          >
            Conti
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="Bengali"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "Bengali"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={bengaliHandler}
            required
          />
          <label id="occ" className="btn-outline-warning" htmlFor="Bengali">
            Bengali
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="Indian&PanAsian"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "Indian & PanAsian"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={northIndianandpanAsianHandler}
            required
          />
          <label
            id="occ"
            className="btn-outline-warning"
            htmlFor="Indian&PanAsian"
          >
            Indian + Chinese
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="Indian&Continential"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "Indian & Continential"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={northIndianandContiHandler}
            required
          />
          <label
            id="occ"
            className="btn-outline-warning"
            htmlFor="Indian&Continential"
          >
            Indian + Conti
          </label>

          <button
            type="submit"
            className="btn-check"
            name="cuisine"
            id="MultiCusine"
            value={cuisine_value}
            autoComplete="off"
            // defaultChecked={this.state.cuisine === "MultiCusine"}
            // onChange={(e) => {
            //   this.change(e);
            //   this.refreshChange(e);
            // }}
            onClick={multiHandler}
            required
          />
          <label id="occ" className="btn-outline-warning" htmlFor="MultiCusine">
            Multi Cuisine
          </label>
        </div>
      </div>
    </form>
  );
};

export default Cuisines;
