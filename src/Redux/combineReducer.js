import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./Projects/projectSlice";

const reducer = combineReducers({
    project : projectReducer
});

export default reducer;