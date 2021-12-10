import "./Eventdate.css";

import { useDispatch, useSelector } from "react-redux";
import { EVENTVALUESTATUS } from "../../Stores/Constant/eventdateConstant";
import { toast } from "react-toastify";
import { FORM2STATUS } from "../../Stores/Constant/formConstant";

const Eventdate = () => {
  let lat_date = useSelector((state) => state.eventReducer.date_value);
  console.log("EVENT_DATE", lat_date);

  const dispatch = useDispatch();

  const todaysDate = new Date();

  let newDate =
    todaysDate.getFullYear() +
    "-" +
    (todaysDate.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    todaysDate.getDate().toString().padStart(2, "0");

  // console.log(newDate);

  const dateHandler = (e) => {
    if (city_chk === false) {
      toast.error("Please enter city!!!");
    } else if (occasion_chk === false) {
      toast.error("Please enter an occasion!!!");
    } else if (pref_chk === false) {
      toast.error("Please enter meal preference!!!");
    } else if (guest_chk === false) {
      toast.error("Please enter guest count!!!");
    } else {
      const date = e.target.value;
      dispatch({ type: EVENTVALUESTATUS, payload: date });

      dispatch({ type: FORM2STATUS });
    }
  };

  const city_chk = useSelector((state) => state.cityReducer.defaultChecked);
  const occasion_chk = useSelector(
    (state) => state.ocassionReducer.defaultChecked
  );
  const pref_chk = useSelector((state) => state.mealReducer.defaultChecked);
  const guest_chk = useSelector((state) => state.guestReducer.defaultChecked);

  return (
    <form className="form-eventdate">
      <div>
        <h5 className="id">Event Date: </h5>
        <div>
          <input
            id="det example-datetime-local-input"
            className="form-control date"
            type="date"
            min={newDate}
            value={
              city_chk && occasion_chk && pref_chk && guest_chk ? lat_date : ""
            }
            // onChange={(e) => {
            //   this.setState({ date: e.target.value });
            // }}
            // onClick={this.blockDiv}
            onChange={dateHandler}
            placeholder="DD/MM/YYYY"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default Eventdate;
