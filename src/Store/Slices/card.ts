import { createSlice } from "@reduxjs/toolkit";
import ICard from "../interfaces/card";
interface ICardState {
  cards: ICard[];
}

// Инициализируем состояние, где карты будут храниться в массиве
const initialState: ICardState = {
  cards: [],
};
const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    resetState: () => initialState,
    add4x4Card: (state, action) => {
      state.cards.push(...action.payload);
    },
    add6x6Card: (state, action) => {
      state.cards.push(...action.payload);
    },
  },
});
export const { add4x4Card, add6x6Card, resetState } = cardSlice.actions;
export default cardSlice.reducer;
