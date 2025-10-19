import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "./reducers";

const initialState = {};
const middleware = [thunk];
export const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware)),
);