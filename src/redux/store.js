import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./Number/numberReducer";
const store = configureStore({
  reducer: { number: numberReducer },
});

export default store;
