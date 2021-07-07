import thunk from "redux-thunk";
import { createStore } from "redux";
import { data } from "./data";
const { createLogger } = require("redux-logger/src");
const { applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ data }),
  applyMiddleware(thunk, logger)
);
