import "./Customerdetails.css";
const Customerdetails = () => {
  return (
    <form className="form-customer-details">
      <div className="cust-1">
        <h4> Fill your details to check Bill </h4>
      </div>

      <div className="cust-2">
        <input
          className="nn"
          //   value={this.state.name}
          placeholder=" Full Name"
          name="name"
          //   onChange={(e) => {
          //     this.change(e);
          //   }}
          type="text"
          required
        ></input>

        <input
          className="nn"
          //   value={this.state.email}
          placeholder=" Email"
          name="email"
          //   onChange={(e) => {
          //     this.change(e);
          //   }}
          type="email"
          id="email"
          required
        ></input>

        <input
          className="nn"
          //   value={this.state.mobileno}
          type="tel"
          placeholder="Whatsapp No for Quote"
          name="mobileno"
          //   onChange={(e) => {
          //     this.change(e);
          //   }}
          id="mobno"
          required
        ></input>
        <button className="btn-price">Check Price</button>
      </div>
    </form>
  );
};

export default Customerdetails;
