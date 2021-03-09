import store from "./customState";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store change", store.getState());
});

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());
