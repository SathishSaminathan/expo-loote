import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import root_reducer from "./reducer";

const store = createStore(root_reducer, composeWithDevTools());

export default store;
