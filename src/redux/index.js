import thunk from "redux-thunk";
import { createStore } from "redux";
import { user } from "./reducer/user";
import { board } from "./reducer/board";
import { board2 } from "./reducer/board2";
import { board3 } from "./reducer/board3";
import { board4 } from "./reducer/board4";
const { createLogger } = require("redux-logger/src");
const { applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ board, board2, board3, board4, user }),
  applyMiddleware(thunk, logger)
);
