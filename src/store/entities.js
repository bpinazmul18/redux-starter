import bugsReducer from "./bugs";
import booksReducer from "./books";
import projectsReducer from "./projects";
import teamsReducer from "./teams";

const { combineReducers } = require("redux");

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  books: booksReducer,
  teams: teamsReducer,
});
