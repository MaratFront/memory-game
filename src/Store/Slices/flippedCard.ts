import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cardFlag: false,
};

const flippedCardSlice = createSlice({
  name: "flippedCard",
  initialState,
  reducers: {
    flippedCard(state, action) {
      state = action.payload;
    },
  },
});

export const { flippedCard } = flippedCardSlice.actions;
export default flippedCardSlice.reducer;
