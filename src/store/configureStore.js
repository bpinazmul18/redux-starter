import { configureStore } from "@reduxjs/toolkit";
import reducer from "./projects";

export default function CreateStore() {
  return configureStore({ reducer });
}
