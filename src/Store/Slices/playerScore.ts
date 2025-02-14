import { createSlice } from "@reduxjs/toolkit";
const initialState = [0, 0, 0, 0];
const playersScoreSlice = createSlice({
  name: "playersScore",
  initialState,
  reducers: {
    addScore(state, action) {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] += 1;
      }
    },
    resetScore(state, action) {
      const index = action.payload;
      state[index] = 0;
    },
  },
});
export const { addScore, resetScore } = playersScoreSlice.actions;
export default playersScoreSlice.reducer;
