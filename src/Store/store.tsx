import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../Store/Slices/card";
import timerSlice from "./Slices/timer";
import playerScoreSlice from "./Slices/playerScore";

export const store = configureStore({
  reducer: {
    cards: cardSlice, // Включаем редуктор для игры
    timer: timerSlice,
    playerScore: playerScoreSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
