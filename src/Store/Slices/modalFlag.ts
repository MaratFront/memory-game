import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Интерфейс состояния
interface ModalState {
  modalFlag: boolean;
  modalType: string;
}

// Начальное состояние
const initialState: ModalState = {
  modalFlag: false,
  modalType: "menu",
};

// Создание слайса
const modalFlagSlice = createSlice({
  name: "modalFlag",
  initialState,
  reducers: {
    // Редюсер с правильно типизированным action
    isModalOpen(
      state,
      action: PayloadAction<[boolean, string]> // payload должен быть массивом из двух элементов
    ) {
      const [modalFlag, modalType] = action.payload;
      state.modalFlag = modalFlag;
      state.modalType = modalType;
    },
  },
});

// Экспортируем actions и reducer
export const { isModalOpen } = modalFlagSlice.actions;
export default modalFlagSlice.reducer;
