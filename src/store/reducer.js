import entitiesReducer from "./entities";

const { combineReducers } = require("redux");

export default combineReducers({
  entities: entitiesReducer,
});
