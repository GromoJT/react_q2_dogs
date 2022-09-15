import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Dog from './Dog.jsx';
import "./index.css";


const App = () => (
  <div className="container">
  
  <Dog />
  <p>zadziałaj...</p>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
