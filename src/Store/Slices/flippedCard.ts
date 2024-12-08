import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: (number | string)[] = [];

const flippedCardSlice = createSlice({
  name: "flippedCard",
  initialState,
  reducers: {
    flippedCard(state, action) {
      state.push(action.payload);
      if (state.length >= 2) {
        if (state.length % 2 === 0) {
          if (state.at(-1) !== state.at(-2)) {
            state.slice(0, -2);
          }
        }
      }
    },
  },
});

export const { flippedCard } = flippedCardSlice.actions;
export default flippedCardSlice.reducer;
