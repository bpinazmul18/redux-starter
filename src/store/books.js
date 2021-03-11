import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addedBook: (books, action) => {
      books.push({
        id: ++lastId,
        bookName: action.payload.bookName,
        isPaid: action.payload.isPaid,
      });
    },
  },
});

export const { addedBook } = slice.actions;
export default slice.reducer;
