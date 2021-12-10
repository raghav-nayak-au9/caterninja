import "./App.css";
import Home from "./Containers/Home/Home";
import Customize from "./Containers/Customize/Customize";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customize" exact component={Customize} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
