import "./Iwant.css";
import { useSelector, useDispatch } from "react-redux";
import {
  MAINSVALUESTATUS,
  STARTERMAINSVALUESTATUS,
} from "../../Stores/Constant/iwantConstant";
import { toast } from "react-toastify";
import { FORM3STATUS } from "../../Stores/Constant/formConstant";

const Iwant = () => {
  const dispatch = useDispatch();
  const cuisine_chk = useSelector(
    (state) => state.cuisineReducer.defaultChecked
  );

  const course_value = useSelector((state) => state.iwantReducer.value);
  console.log("COURSE_VALUE", course_value);

  const course_chk = useSelector((state) => state.iwantReducer.defaultChecked);
  console.log("COURSE_CHECKED", course_chk);

  const mainHandler = () => {
    dispatch({ type: MAINSVALUESTATUS });
  };

  const starterMainHandler = () => {
    dispatch({ type: STARTERMAINSVALUESTATUS });
  };

  const courseSubmitHandler = (e) => {
    e.preventDefault();

    if (cuisine_chk === false) {
      toast.error("Please select any cuisine");
    } else {
      dispatch({ type: FORM3STATUS });
    }
  };

  return (
    <form className="form-iwant" onSubmit={courseSubmitHandler}>
      <div>
        <div id="want">
          <span>I Want</span>🙋🏻‍♂️
        </div>
        <div className="dd">
          <button
            type="submit"
            className="btn-check"
            name="mealtype"
            id="MainCourse"
            value="Main course"
            autoComplete="off"
            // defaultChecked={this.state.mealtype === "Main course"}
            // onChange={(e) => {
            //   this.change(e);
            // }}
            // onClick={this.showDiv}
            onClick={mainHandler}
            required
          />
          <label id="ocn" className="btn-outline-warning" htmlFor="MainCourse">
            Only Mains
          </label>

          <button
            type="submit"
            className="btn-check"
            name="mealtype"
            id="Appetizers&MainCourse"
            value="Starter & MainCourse"
            autoComplete="off"
            // defaultChecked={this.state.mealtype === "Starter & MainCourse"}
            // onChange={(e) => {
            //   this.change(e);
            // }}
            // onClick={this.showDiv}
            onClick={starterMainHandler}
            required
          />
          <label
            id="ocn"
            className="btn-outline-warning"
            htmlFor="Appetizers&MainCourse"
          >
            Starters + Mains
          </label>
        </div>
      </div>
    </form>
  );
};

export default Iwant;
