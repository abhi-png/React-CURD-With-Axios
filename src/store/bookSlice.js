import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://68.178.162.203:8080/application-test-v1.1/books";

export const getBooks = createAsyncThunk("getBooks", async () => {
   try {
      const response = await axios.get(baseUrl)
      return response.data
   } catch (error) {
      console.log(error);
   }
});

const bookSlice = createSlice({
   name: "bookslice",
   initialState: {
      bookData: []
   },
   reducers: {
      setBooks(state, action) {
         state = action.payload;
      },
      addBook(state, action) {
         const book = action.payload;
         state.push(book);
      },
      editBook(state, action) {
         const book = action.payload;
         const index = state.findIndex((b) => b.id === book.id);
         state[index] = book;
      },
      deleteBook(state, action) {
         const bookId = action.payload;
         const index = state.findIndex((b) => b.id === bookId);
         state.splice(index, 1);
      },
   },
   extraReducers: {
      [getBooks.fulfilled]: (state, { payload }) => {
         state.bookData = payload;
      },
   }
});

export const { setBooks, addBook, editBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;