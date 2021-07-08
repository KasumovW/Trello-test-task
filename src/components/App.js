import "./style.css";
import Hold from "./Hold";
import Login from "./Login";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadBoardData } from "../redux/action";
import Needs from './Needs';
import Progress from './Progress';
import Approved from './Approved';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBoardData());
  }, []);

  const board = useSelector((state) => state.board.board);
  const boardLoading = useSelector((state) => state.board.boardLoading);
  const token = useSelector((state) => state.user.token);
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route exact path="/">
          {boardLoading ? (
            <div className="loading-spinner">
              Loading <i className="fas fa-sync"></i>
            </div>
          ) : (
            <>
              <Hold />
              <Needs />
              <Progress />
              <Approved />
            </>
          )}
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
