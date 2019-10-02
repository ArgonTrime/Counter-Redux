import appReducer from "./appReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    counter: appReducer
});
let store = createStore(reducers);

export default store;