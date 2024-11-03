import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/card";
import timerSlice from "./Slices/timer";
import playerScoreSlice from "./Slices/playerScore";
import settingsCardSlice from "./Slices/settingsCard";
import flippedCardSlice from "./Slices/flippedCard";
export const store = configureStore({
  reducer: {
    cards: cardSlice,
    timer: timerSlice,
    playerScore: playerScoreSlice,
    settingsCard: settingsCardSlice,
    flippedCard: flippedCardSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
