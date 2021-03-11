import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "teams",
  initialState: [],
  reducers: {
    addedMember: (member, action) => {
      member.push({
        id: ++lastId,
        name: action.payload.name,
        isPaidMember: action.payload.isPaidMember,
      });
    },
  },
});

export const { addedMember } = slice.actions;

export default slice.reducer;
