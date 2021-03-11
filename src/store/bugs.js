import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        isResolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].isResolved = true;
    },
  },
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;

//Selector
//Memorization
//bugs => get unresolved bugs from the cache

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter((bug) => !bug.isResolved)
);
