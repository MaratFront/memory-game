import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalFlag: false,
};
const modalFlagSlice = createSlice({
  name: "modalFlag",
  initialState,
  reducers: {
    isModalOpen(state, action) {
      state.modalFlag = action.payload;
    },
  },
});
export const { isModalOpen } = modalFlagSlice.actions;
export default modalFlagSlice.reducer; //export reducer to store.js
