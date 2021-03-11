import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function rootReducers() {
  return configureStore({ reducer });
}
