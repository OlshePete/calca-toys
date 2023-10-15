'use client';

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Feature/basket/basketSlice"
import viewedReducer from "./Feature/viewed/viewedSlice"


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    viewed: viewedReducer
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
