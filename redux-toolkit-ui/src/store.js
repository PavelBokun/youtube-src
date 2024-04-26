import { configureStore } from "@reduxjs/toolkit";
import userSlise from "./features/userSlise";
import todoSlice from "./features/todo2";

const store = configureStore({
  reducer: {
    user: userSlise,
    todo: todoSlice,
  },
});

export default store;
