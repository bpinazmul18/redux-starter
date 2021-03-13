import bugsReducer from "./bugs";
import booksReducer from "./books";
import projectsReducer from "./projects";
import teamsReducer from "./teams";
import usersReducer from "./users";

const { combineReducers } = require("redux");

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  books: booksReducer,
  teams: teamsReducer,
  users: usersReducer,
});
