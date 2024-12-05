import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: (number | string)[] = [];

const flippedCardSlice = createSlice({
  name: "flippedCard",
  initialState,
  reducers: {
    flippedCard(state, action) {
      if (state.length < 2) {
        state.push(action.payload);
      } else {
        state.length = 0;
        state.push(action.payload);
      }
    },
  },
});

export const { flippedCard } = flippedCardSlice.actions;
export default flippedCardSlice.reducer;
