import "./Cities.css";
import {
  MUMBAICITYVALUESTATUS,
  BANGALORECITYVALUESTATUS,
  DELHICITYVALUESTATUS,
  GURGAONCITYVALUESTATUS,
} from "../../Stores/Constant/cityConstant";
import { CURRENTDATASTATUS } from "../../Stores/Constant/dataConstant";
import { cityData } from "../../Stores/Actions/dataAction";

import imageM from "../Images/M.png";
import imageB from "../Images/B.png";
import imageD from "../Images/D.png";
import imageG from "../Images/G.png";

import { useSelector, useDispatch } from "react-redux";

const Cities = () => {
  const dispatch = useDispatch();

  const cityHandlerMumbai = () => {
    dispatch({ type: MUMBAICITYVALUESTATUS });
  };

  const cityHandlerBangalore = () => {
    dispatch({ type: BANGALORECITYVALUESTATUS });
  };

  const cityHandlerDelhi = () => {
    dispatch({ type: DELHICITYVALUESTATUS });
  };

  const cityHandlerGurgaon = () => {
    dispatch({ type: GURGAONCITYVALUESTATUS });
  };

  const citySubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await cityData({ city: cityValue });
      // console.log(res.data.data1);
      dispatch({ type: CURRENTDATASTATUS, payload: res.data.data1 });
    } catch (err) {
      console.log("Error", err);
    }
  };

  const cityChecked = useSelector((state) => state.cityReducer.defaultChecked);
  console.log("CITY_CHECK : ", cityChecked);
  const cityValue = useSelector((state) => state.cityReducer.value);
  console.log("CITY_VALUE : ", cityValue);
  const filteredCityData = useSelector((state) => state.dataReducer.data);
  console.log("CITY_FILTERED_DATA : ", filteredCityData);

  return (
    <form className="form-city" onSubmit={citySubmitHandler}>
      <div>
        <h5 id="cicc">Choose City</h5>

        <button
          type="submit"
          className="btn-check"
          name="city"
          id="city_mumbai"
          value={cityValue}
          autoComplete="off"
          //   onChange={(e) => {
          //     this.change(e);
          //     this.refreshChange(e);
          //   }}
          defaultChecked={cityChecked}
          onClick={cityHandlerMumbai}
          required
        />
        <label id="city" className="btn-outline-warning" htmlFor="city_mumbai">
          <img src={imageM} alt="mumbai" id="city-logo" />
        </label>

        <button
          type="submit"
          className="btn-check"
          name="city"
          id="city_bangalore"
          value={cityValue}
          autoComplete="off"
          //   defaultChecked={this.state.city === "bangalore"}
          //   onChange={(e) => {
          //     this.change(e);
          //     this.refreshChange(e);
          //   }}
          defaultChecked={cityChecked}
          onClick={cityHandlerBangalore}
          required
        />
        <label
          id="city"
          className="btn-outline-warning"
          htmlFor="city_bangalore"
        >
          <img src={imageB} alt="bangalore" id="city-logo" />
        </label>

        <button
          type="submit"
          className="btn-check"
          name="city"
          id="city_delhi"
          value={cityValue}
          autoComplete="off"
          //   defaultChecked={this.state.city === "delhi"}
          //   onChange={(e) => {
          //     this.change(e);
          //     this.refreshChange(e);
          //   }}
          defaultChecked={cityChecked}
          onClick={cityHandlerDelhi}
          required
        />
        <label id="city" className="btn-outline-warning" htmlFor="city_delhi">
          <img src={imageD} alt="delhi" id="city-logo" />
        </label>

        <button
          type="submit"
          className="btn-check"
          name="city"
          id="city_gurgaon"
          value={cityValue}
          autoComplete="off"
          //   defaultChecked={this.state.city === "gurgaon"}
          //   onChange={(e) => {
          //     this.change(e);
          //     this.refreshChange(e);
          //   }}
          defaultChecked={cityChecked}
          onClick={cityHandlerGurgaon}
          required
        />
        <label id="city" className="btn-outline-warning" htmlFor="city_gurgaon">
          <img src={imageG} alt="gurgaon" id="city-logo" />
        </label>
      </div>
    </form>
  );
};

export default Cities;
