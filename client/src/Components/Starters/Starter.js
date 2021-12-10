import "./Starter.css";
import { STARTERVALUESTATUS } from "../../Stores/Constant/starterDessertConstant";
import { useSelector, useDispatch } from "react-redux";

const Starters = () => {
  const dispatch = useDispatch();

  const starterHandler = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    const data1 = starter_filtered_data1.find(
      (elem) => elem.label === selectedValue
    );
    console.log(data1);
  };

  const data = useSelector((state) => state.starterDessertReducer.starter_data);
  // console.log(data);

  const city_value = useSelector((state) => state.cityReducer.value);
  console.log(city_value);

  const meal_preference = useSelector((state) => state.mealReducer.value);
  console.log(meal_preference);

  const starter_filtered_data = data.filter((elem) => elem.city === city_value);
  const starter_filtered_data1 = starter_filtered_data.filter(
    (elem) => elem.preference === meal_preference
  );

  return (
    <form className="form-starters">
      <div className="inner-str">
        <div className="inner1">
          <select
            defaultValue={"DEFAULT"}
            className="select-starter"
            name="starter"
            id="starter"
            onChange={starterHandler}
          >
            <option value="DEFAULT" disabled>
              Please select a starter
            </option>
            {starter_filtered_data1.map((elem) => {
              return (
                <option key={elem.id} value={elem.label}>
                  {elem.label}
                </option>
              );
              // console.log(elem);
            })}
          </select>
          <input type="number" className="quantity" placeholder="Qty" />
        </div>
      </div>
    </form>
  );
};

export default Starters;
