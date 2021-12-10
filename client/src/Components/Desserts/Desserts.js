import "./Desserts.css";

const Desserts = () => {
  return (
    <form className="form-dessert">
      <div className="inner-dessert">
        {/* <label className="dessert" htmlFor="label">
          Add Desserts
        </label> */}
        <div className="inner1">
          <select className="select-dessert">
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

export default Desserts;
