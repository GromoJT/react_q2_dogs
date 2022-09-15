import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Dog = React.lazy(()=>import('./Dog'));

const App = () => (
  <div className="container">
  <Suspense fallback={<div>Loading...</div>}>
  <Dog />
  </Suspense>
  

    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
