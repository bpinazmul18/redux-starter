import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";
import { addedBook } from "./store/books";
import { addedMember } from "./store/teams";

const store = configureStore();

store.subscribe(() => {
  console.log("Store change", store.getState());
});

store.dispatch(addedMember({ name: "Md Nazmul Haque", isPaidMember: false }));
store.dispatch(addedMember({ name: "Rafsan Jani", isPaidMember: true }));
store.dispatch(addedMember({ name: "Rubel Rana", isPaidMember: true }));
store.dispatch(addedMember({ name: "Shohagh", isPaidMember: true }));

store.dispatch(addedBook({ bookName: "Math", isPaid: false }));
store.dispatch(addedBook({ bookName: "English", isPaid: true }));
store.dispatch(addedBook({ bookName: "Javascript", isPaid: false }));

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));
store.dispatch(projectAdded({ name: "Project 3" }));
store.dispatch(projectAdded({ name: "Project 4" }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

console.log("from Store.getSTate()", store.getState());

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x === y);
