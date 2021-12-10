import "./Maincourse.css";

const Maincourse = () => {
  return (
    <form className="form-main">
      <div className="inner-main">
        {/* <label className="main" htmlFor="label">
          Main Course
        </label> */}
        <div className="inner1">
          <select className="select-main">
            <option name="option1" id="option1">
              1
            </option>
            <option name="option2" id="option2">
              2
            </option>
            <option name="option3" id="option3">
              3
            </option>
          </select>
          {/* <input type="number" className="quantity" placeholder="Qty" /> */}
        </div>
      </div>
    </form>
  );
};

export default Maincourse;
