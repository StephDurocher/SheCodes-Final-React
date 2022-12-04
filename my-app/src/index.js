import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1>Weather App</h1>
      <div className="card">
        <div className="card-body">
          <Weather />
          <hr />
          <div className="row">
            <Forecast />
          </div>
        </div>
      </div>
      <p>Coded by Stephanie Durocher</p>
    </div>
  </React.StrictMode>
);
