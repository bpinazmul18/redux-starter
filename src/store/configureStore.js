import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

const rootReducer = combineReducers({
  bugsReducer,
  projectsReducer,
});

export default function rootReducers() {
  return configureStore({ reducer: rootReducer });
}
