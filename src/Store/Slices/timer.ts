import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seconds: 0,
  minutes: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    tick: (state) => {
      state.seconds += 1;

      if (state.seconds === 60) {
        state.seconds = 0;
        state.minutes += 1;
      }
    },
    resetTimer: (state) => {
      state.seconds = 0;
      state.minutes = 0;
    },
  },
});

export const { tick, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
