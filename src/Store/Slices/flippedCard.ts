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
        // Очищаем массив и добавляем новую карту
        state.splice(0, state.length, action.payload);
      }
    },
  },
});

export const { flippedCard } = flippedCardSlice.actions;
export default flippedCardSlice.reducer;
