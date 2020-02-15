import React from "react";
import Routes from "./routes";
import { Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Routes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
