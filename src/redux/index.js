import thunk from "redux-thunk";
import { createStore } from "redux";
import { user } from './reducer/user';
import { board } from './reducer/board';
const { createLogger } = require("redux-logger/src");
const { applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ board, user }),
  applyMiddleware(thunk, logger)
);
