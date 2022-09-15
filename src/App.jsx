import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
  <Suspense fallback={<div>Loading...</div>}>
    <div>Test</div>
  </Suspense>
  

    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
