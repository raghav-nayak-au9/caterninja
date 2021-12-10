import "./Brn.css";

const Brn = () => {
  return (
    <form className="form-brn">
      <div className="inner-brn">
        {/* <label className="brn" htmlFor="label">
          Bread + Rice + Noodles
        </label> */}
        <div className="inner1">
          <select className="select-brn">
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

export default Brn;
