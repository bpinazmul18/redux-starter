import store from "./store";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});
store.dispatch(actions.bugAdded("Bug1"));

console.log(store.getState());
