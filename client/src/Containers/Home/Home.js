import { Button } from "react-bootstrap";
import "./Home.css";
import images from "../../Components/Images/logo.jpg";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";

const Home = ({ history }) => {
  const x = document.referrer;
  console.log(x);
  const [loading, setLoading] = useState(false);

  const onClickHandler = () => {
    setTimeout(() => {
      history.push({ pathname: "/customize" });
    }, 300);

    setLoading(true);
  };

  return (
    <div className="outer-container-home">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {/* Top div for button */}
          <div className="d-flex align-items-center justify-content-center top-div">
            <Button className="btn" variant="primary" onClick={onClickHandler}>
              <h4>Get Instant Quote</h4>
            </Button>
          </div>
          {/* Bottom div for image and text */}
          <div className=" btm-div">
            <a href="https://www.caterninja.com/">
              <img src={images} alt="logo" className="logo" />
            </a>
            <ul className="ulol">
              <li className="lili">
                🍀 <span>Step 1: Choose Your Own Menu and Get Quote</span>
              </li>
              <li>
                🍀 <span>Step 2: Go Back, Change Menu, Get Revised Quote</span>
              </li>
              <li>
                🍀 <span>Step 3: Book Instantly!</span>
              </li>
            </ul>
            <em>Powered by Ai</em>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
