import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//kada imamo multiple slices
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
