import "./style.css";
import Hold from "./Hold";
import Login from "./Login";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Needs from "./Needs";
import Progress from "./Progress";
import Approved from "./Approved";

function App() {
  const token = useSelector((state) => state.user.token);
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route exact path="/">
          <Hold />
          <Needs />
          <Progress />
          <Approved />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <div className="App">{routes}</div>;
}

export default App;
