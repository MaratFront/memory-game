import { createSlice } from "@reduxjs/toolkit";
interface IinitialState {
  selectedCard: (string | number)[];
}
const initialState: IinitialState = {
  selectedCard: [],
};
const selectedCardSlice = createSlice({
  name: "selectedCard",
  initialState,
  reducers: {
    addSelectedCard: (state, action) => {
      state.selectedCard.push(action.payload);
    },
    resetSelectedCard: (state) => {
      state.selectedCard.length = 0;
    },
  },
});
export const { addSelectedCard, resetSelectedCard } = selectedCardSlice.actions;
export default selectedCardSlice.reducer;
