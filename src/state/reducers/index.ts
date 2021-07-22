import { combineReducers } from "redux";
import pckgReducer from "./pckgReducer";

const reducers = combineReducers({
    pckgs: pckgReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;