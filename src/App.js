import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Details from "./Components/Details";
import City from "./components/city";

function App() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/details/:id">
        <Details />
      </Route>
        <City />
      <Route exact path="/:city"></Route>
    </Switch>
  );
}

export default App;
