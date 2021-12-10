import "./Guestcount.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GUESTVALUESTATUS } from "../../Stores/Constant/guestConstant";

const Guestcount = () => {
  const [fld, setFld] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let arr = [];
    for (let i = 10; i < 100; i++) {
      arr[i] = i;
    }
    setFld(arr);
  }, []);

  // console.log(fld);

  const onSelectHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: GUESTVALUESTATUS, payload: value });
  };

  const count_value = useSelector((state) => state.guestReducer.value);
  console.log("GUEST_COUNT", count_value);

  const guest_check = useSelector((state) => state.guestReducer.defaultChecked);
  console.log("GUEST_CHECK", guest_check);

  return (
    <form className="form-guest">
      <h5 id="ppl">Guest Count: </h5>
      <div className="inner-guest">
        <select
          className="form-select"
          aria-label="Default select example"
          name="people"
          value={count_value}
          // onChange={(e) => {
          //   this.change(e);
          // }}
          id="optionSelect"
          // onClick={this.optionSelect}
          onChange={onSelectHandler}
        >
          <option value="">People</option>
          {fld?.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Guestcount;
