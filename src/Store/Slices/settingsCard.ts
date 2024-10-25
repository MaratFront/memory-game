import { createSlice } from "@reduxjs/toolkit";
interface ICardState {
  theme: string;
  countGamers: number;
  gridSize: string;
}

// Инициализируем состояние, где карты будут храниться в массиве
const initialState: ICardState = {
  theme: "",
  countGamers: 0,
  gridSize: "",
};
const settingsCardSlice = createSlice({
  name: "settingsCards",
  initialState,
  reducers: {
    resetState: () => initialState,
    addCardTheme: (state, action) => {
      state.theme = action.payload;
    },
    addCardGamers: (state, action) => {
      state.countGamers = action.payload;
    },
    addCardGrid: (state, action) => {
      state.gridSize = action.payload;
    },
  },
});
export const { addCardTheme, addCardGamers, addCardGrid, resetState } =
  settingsCardSlice.actions;
export default settingsCardSlice.reducer;
