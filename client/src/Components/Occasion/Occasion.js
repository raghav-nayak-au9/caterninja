import "./Occasion.css";
import { useDispatch, useSelector } from "react-redux";
import {
  BIRTHDAYPARTYVALUESTATUS,
  HOUSEPARTYVALUESTATUS,
  HOUSEWARMINGVALUESTATUS,
  PREWEDDINGVALUESTATUS,
  OFFICEPARTYVALUESTATUS,
  OTHERVALUESTATUS,
} from "../../Stores/Constant/ocassionConstant";

const Occasion = () => {
  const dispatch = useDispatch();

  const birthdaypartyHandler = (e) => {
    e.preventDefault();
    dispatch({ type: BIRTHDAYPARTYVALUESTATUS });
  };

  const housepartyHandler = (e) => {
    e.preventDefault();
    dispatch({ type: HOUSEPARTYVALUESTATUS });
  };

  const housewarmingHandler = (e) => {
    e.preventDefault();
    dispatch({ type: HOUSEWARMINGVALUESTATUS });
  };

  const preweddingHandler = (e) => {
    e.preventDefault();
    dispatch({ type: PREWEDDINGVALUESTATUS });
  };

  const officepartyHandler = (e) => {
    e.preventDefault();
    dispatch({ type: OFFICEPARTYVALUESTATUS });
  };

  const otherocassionHandler = (e) => {
    e.preventDefault();
    dispatch({ type: OTHERVALUESTATUS });
  };

  const ocassionStatus = useSelector(
    (state) => state.ocassionReducer.defaultChecked
  );
  console.log("OCASSION_CHECK : ", ocassionStatus);

  return (
    <form className="form-occasion">
      <div>
        <h5 id="onno">Occasion</h5>
        <div>
          <button
            type="submit"
            className="btn-check"
            name="options-outlined"
            id="BirthdayParty"
            value="Birthday Party"
            autoComplete="off"
            // defaultChecked={this.state.occasion === "Birthday Party"}
            // onChange={(e) => {
            //   this.occasion(e);
            // }}
            defaultChecked={ocassionStatus}
            onClick={birthdaypartyHandler}
            required
          />
          <label
            id="ocnc"
            className="btn-outline-warning"
            htmlFor="BirthdayParty"
          >
            <i className="fas fa-birthday-cake"></i>Birthday party
          </label>

          <button
            type="submit"
            className="btn-check"
            name="options-outlined"
            id="HouseParty"
            value="House Party"
            autoComplete="off"
            // defaultChecked={this.state.occasion === "House Party"}
            // onChange={(e) => {
            //   this.occasion(e);
            // }}
            defaultChecked={ocassionStatus}
            onClick={housepartyHandler}
            required
          />
          <label id="ocnc" className="btn-outline-warning" htmlFor="HouseParty">
            <i className="fas fa-glass-cheers"></i> House party
          </label>

          <button
            type="submit"
            className="btn-check"
            name="options-outlined"
            id="HouseWarming"
            value="House Warming"
            autoComplete="off"
            // defaultChecked={this.state.occasion === "House Warming"}
            // onChange={(e) => {
            //   this.occasion(e);
            // }}
            defaultChecked={ocassionStatus}
            onClick={housewarmingHandler}
            required
          />
          <label
            id="ocnc"
            className="btn-outline-warning"
            htmlFor="HouseWarming"
          >
            <i className="fas fa-home"></i>House Warming
          </label>

          <button
            type="submit"
            className="btn-check"
            name="options-outlined"
            id="PreWedding"
            value="Pre Wedding"
            autoComplete="off"
            // defaultChecked={this.state.occasion === "Pre Wedding"}
            // onChange={(e) => {
            //   this.occasion(e);
            // }}
            defaultChecked={ocassionStatus}
            onClick={preweddingHandler}
            required
          />
          <label id="ocnc" className="btn-outline-warning" htmlFor="PreWedding">
            <i className="fas fa-male">
              <i className="fas fa-female"></i>
            </i>
            Pre - Wedding
          </label>

          <button
            type="submit"
            className="btn-check"
            name="options-outlined"
            id="OfficeParty"
            value="Office Party"
            autoComplete="off"
            // defaultChecked={this.state.occasion === "Office Party"}
            // onChange={(e) => {
            //   this.occasion(e);
            // }}
            defaultChecked={ocassionStatus}
            onClick={officepartyHandler}
            required
          />
          <label
            id="ocnc"
            className="btn-outline-warning"
            htmlFor="OfficeParty"
          >
            <i className="fas fa-briefcase"></i>Office Party
          </label>

          <button
            type="submit"
            className="btn-check"
            name="options-outlined"
            id="OtherOccasion"
            value="Other Occasion"
            autoComplete="off"
            // defaultChecked={this.state.occasion === "Other Occasion"}
            // onChange={(e) => {
            //   this.occasion(e);
            // }}
            defaultChecked={ocassionStatus}
            onClick={otherocassionHandler}
            required
          />
          <label
            id="ocnc"
            className="btn-outline-warning"
            htmlFor="OtherOccasion"
          >
            <i className="fas fa-sun"></i>Other Occasion
          </label>
        </div>
      </div>
    </form>
  );
};

export default Occasion;
