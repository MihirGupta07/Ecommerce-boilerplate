import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};
