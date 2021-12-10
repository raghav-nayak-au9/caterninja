import "./Billitems.css";

const Billitems = () => {
  return (
    <form className="form-bill">
      <div className="bill-heading">
        <h4>Your Bill items</h4>
      </div>

      <div className="bill-body">
        <div className="bill-1">
          <p className="crs">Appetizer Total</p>
          <p className="price">Rs.0</p>
        </div>
        <div className="bill-2">
          <p className="crs">Main Course Total</p>
          <p className="price">Rs.0</p>
        </div>
        <div className="bill-3">
          <p className="crs">Bread and Rice Total</p>
          <p className="price">Rs.0</p>
        </div>
        <div className="bill-4">
          <p className="crs">Dessert Total</p>
          <p className="price">Rs.0</p>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid black",
          borderStyle: "none none solid",
          width: "70%",
        }}
      />
      <div className="subtotal">
        <div className="subtotal-1">
          <p className="crs">SubTotal</p>
          <p className="price">Rs.0</p>
        </div>
        <div className="subtotal-2">
          <p className="crs">5% GST</p>
          <p className="price">Rs.0</p>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid black",
          borderStyle: "none none solid",
          width: "70%",
        }}
      />
      <div className="grandtotal">
        <div className="grandtotal-1">
          <p className="crs">GrandTotal</p>
          <p className="price">Rs.0</p>
        </div>
      </div>
    </form>
  );
};

export default Billitems;
