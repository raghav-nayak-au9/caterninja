import Header from "../../Components/Header/Header";
import Cities from "../../Components/Cities/Cities";
import Occasion from "../../Components/Occasion/Occasion";
import Mealtype from "../../Components/Mealtype/Mealtype";
import Guestcount from "../../Components/Guestcount/Guestcount";
import Eventdate from "../../Components/Eventdate/Eventdate";
import Cuisines from "../../Components/Cuisines/Cuisines";
import Iwant from "../../Components/Iwant/Iwant";
import Starters from "../../Components/Starters/Starter";
import Maincourse from "../../Components/Maincourse/Maincourse";
import Brn from "../../Components/Bread-Rice-noodles/Brn";
import Desserts from "../../Components/Desserts/Desserts";
import Ninjabxbuff from "../../Components/Ninjabox-Ninjabuffet/Ninjabxbuff";
import Customerdetails from "../../Components/Customerdetails/Customerdetails";
import Billitems from "../../Components/Bill-Items/Billitems";
import Actionbutton from "../../Components/Action-Button/Actionbutton";
import Chooseus from "../../Components/Choose-us/Chooseus";
import "./Customize.css";
// import Ninjabox from "../../Components/Key-details/Ninjabox";
import Ninjabuffet from "../../Components/Key-details/Ninjabuffet";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { starterData } from "../../Stores/Actions/dataAction";
import { STARTERVALUESTATUS } from "../../Stores/Constant/starterDessertConstant";

const Customize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await starterData();

      dispatch({ type: STARTERVALUESTATUS, payload: res.data });
    };
    fetchData();
  }, [dispatch]);

  const visible2 = useSelector((state) => state.formReducer.visible2);
  const visible3 = useSelector((state) => state.formReducer.visible3);
  const visible4 = useSelector((state) => state.formReducer.visible4);
  const iwantValue = useSelector((state) => state.iwantReducer.value);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div id="1">
          <Header />
          <Cities />
          <Occasion />
          <div className="mid-div">
            <Mealtype />
            <Guestcount />
            <Eventdate />
          </div>
          <hr />
        </div>
        {visible2 === false ? null : (
          <div id="2">
            <Cuisines />
            <Iwant />
            <hr />
          </div>
        )}

        {visible3 === false ? null : (
          <div id="3">
            <div className="course-div">
              {iwantValue !== "mains" ? (
                <>
                  <div className="course-starters">
                    <span className="str">Starter</span>
                    <Starters />
                  </div>
                  <div className="course-main">
                    <span className="main">Main Course</span>
                    <Maincourse />
                  </div>
                  <div className="course-brn">
                    <span className="brn">Breads + Rice + Noodles</span>
                    <Brn />
                  </div>
                  <div className="course-dessert">
                    <span className="dessert">Add Dessert</span>
                    <Desserts />
                  </div>
                </>
              ) : (
                <>
                  <div className="course-main">
                    <span className="main">Main Course</span>
                    <Maincourse />
                  </div>
                  <div className="course-brn">
                    <span className="brn">Breads + Rice + Noodles</span>
                    <Brn />
                  </div>
                  <div className="course-dessert">
                    <span className="dessert">Add Dessert</span>
                    <Desserts />
                  </div>
                </>
              )}
            </div>
            <Ninjabxbuff />
            <hr />
            <Customerdetails />
            <hr />
          </div>
        )}
        {visible4 === false ? null : (
          <div id="4">
            <Billitems />
            <Actionbutton />
            <hr />
            {/* <Ninjabox /> */}
            <Ninjabuffet />
            <Chooseus />
          </div>
        )}
      </div>
    </div>
  );
};

export default Customize;
