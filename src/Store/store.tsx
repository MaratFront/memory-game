import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../Store/Slices/card";

export const store = configureStore({
  reducer: {
    cards: cardSlice, // Включаем редуктор для игры
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
