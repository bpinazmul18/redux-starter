import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { addedBook } from "./store/books";
import { addedMember } from "./store/teams";
import { userAdded } from "./store/users";

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

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(userAdded({ name: "User 3" }));

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));
store.dispatch(projectAdded({ name: "Project 3" }));
store.dispatch(projectAdded({ name: "Project 4" }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));

console.log("from Store.getSTate()", store.getState());

const bugs = getBugsByUser(2)(store.getState());
console.log(bugs);
