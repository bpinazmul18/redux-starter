import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";
import { addedBook } from "./store/books";

const store = configureStore();

store.subscribe(() => {
  console.log("Store change", store.getState());
});

store.dispatch(addedBook({ bookName: "Math", isPaid: false }));
store.dispatch(addedBook({ bookName: "English", isPaid: true }));
store.dispatch(addedBook({ bookName: "Javascript", isPaid: false }));

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));
store.dispatch(projectAdded({ name: "Project 3" }));
store.dispatch(projectAdded({ name: "Project 4" }));

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));

console.log(store.getState());
