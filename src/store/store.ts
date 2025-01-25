import { configureStore } from "@reduxjs/toolkit";
import templatesReducer from "./templatesSlice";
import roleReducer from "./roleSlice";

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
    role: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
