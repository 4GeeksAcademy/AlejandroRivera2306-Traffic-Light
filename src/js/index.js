//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


const Contenedor = () => {
    return (
      <div className="menu">
        <Home/>
      </div>
    );
  };


//render your react application
ReactDOM.render(<Contenedor />, document.querySelector("#app"));
