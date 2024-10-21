import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../Store/Slices/card";
import timerSlice from "./Slices/timer";
export const store = configureStore({
  reducer: {
    cards: cardSlice, // Включаем редуктор для игры
    timer: timerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
