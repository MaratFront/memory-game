import { createSlice } from "@reduxjs/toolkit";
interface ICardState {
  theme: string;
  countGamers: number;
  gridSize: string | number;
}

// Инициализируем состояние, где карты будут храниться в массиве
const initialState: ICardState = {
  theme: "Numbers",
  countGamers: 1,
  gridSize: "4x4",
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
