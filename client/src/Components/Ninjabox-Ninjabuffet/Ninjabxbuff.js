import "./Ninjabxbuff.css";

const Ninjabxbuff = () => {
  return (
    <form className="form-ninja">
      <span className="bxbuff">NinjaBox or NinjaBuffet:</span>

      <div className="inner-ninja">
        <select
          aria-label="Default select example"
          className="form-select"
          id="fontR"
          name="buffet"
          // value={this.state.buffet}
          // onChange={this.onChangeB.bind(this)}
        >
          {/* <option defaultValue>Select one</option> */}
          <option value="0" defaultValue>
            Ninjabox - Delivery (Free)
          </option>
          <option value="3500">Buffet setup + 1 waiter (+ ₹ 3,500.00)</option>
          <option value="4500">Buffet setup + 2 waiter (+ ₹ 4,500.00)</option>
        </select>
        <p>Rs {0}</p>
      </div>
    </form>
  );
};

export default Ninjabxbuff;
