import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/details/:id">
        <Details />
      </Route>
      <Route exact path="/:city"></Route>
    </Switch>
  );
}

export default App;
