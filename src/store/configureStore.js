import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { logger } from "./middleware/logger";
import toast from "./middleware/toast";
// import func from "./middleware/func";
import api from "./middleware/api";

export default function rootReducers() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "Console" }),
      toast,
      api,
      // func,
    ],
  });
}
