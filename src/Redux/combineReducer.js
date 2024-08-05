import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./Projects/projectSlice";
import FeatureReducer from "./Features/featureSlice";
import todoReducer from "./Todos/todoSlice";

const reducer = combineReducers({
    project : projectReducer,
    feature : FeatureReducer,
    todo : todoReducer
});

export default reducer;