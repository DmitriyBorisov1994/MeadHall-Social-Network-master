import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </Router >
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
