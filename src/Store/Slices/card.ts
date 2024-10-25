import { createSlice } from "@reduxjs/toolkit";
interface ICard {
  cards: (number | string)[];
}
const initialState: ICard = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(...action.payload);
    },
    resetCard: () => initialState,
  },
});
export const { addCard, resetCard } = cardSlice.actions;
export default cardSlice.reducer;
