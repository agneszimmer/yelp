import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";


//components
import Details from "./Components/Details";
import City from "./Components/City";
import Homepage from "./Components/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          {/*  <Route exact path="/details/:id" render={ (props)=> <Details {...props} /> } /> */}

          <Route path="/details/:id">
            <Details />
          </Route>
          
          <Route exact path="/city/:city">
            <City />
          </Route>

        </Switch>
      </React.Fragment>
    </div>

  );
}

export default App;
