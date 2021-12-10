import "./Header.css";
import box from "../Images/box.png";

const Header = () => {
  return (
    <div className="outer-container-header">
      <h5 id="web-h5">
        Welcome to CaterNinja <i className="fas fa-user-ninja"></i>
      </h5>
      <div className="inner-container-header">
        <h6 id="h6h6">
          <span>NinjaBox - Bulk Food Delivery</span>
          <br />
          <span>NinjaBuffet - Buffet Setup + Service</span>
        </h6>
        <a href="https://www.caterninja.com/">
          <img src={box} alt="box" id="xob" />
        </a>
      </div>
    </div>
  );
};

export default Header;
