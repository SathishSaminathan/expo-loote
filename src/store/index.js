import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import root_reducer from "./reducer";

const store = createStore(root_reducer, applyMiddleware(logger));

export default store;
