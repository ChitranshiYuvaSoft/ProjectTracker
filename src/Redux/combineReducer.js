import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./Projects/projectSlice";
import FeatureReducer from "./Features/featureSlice";
import todoReducer from "./Todos/todoSlice";
import authReducer from "./auth/authSlice";

const reducer = combineReducers({
    project : projectReducer,
    feature : FeatureReducer,
    todo : todoReducer,
    auth : authReducer
});

export default reducer;