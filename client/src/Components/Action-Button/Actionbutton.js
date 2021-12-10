import "./Actionbutton.css";

const Actionbutton = () => {
  return (
    <div className="action-div">
      <button className="bn">Buy</button>
      <button className="wbtn">
        <i id="whatsicon" className="fab fa-whatsapp"></i>
        &nbsp; Chat help to Book
      </button>
    </div>
  );
};

export default Actionbutton;
