import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Categories, TaskItemType, TaskMode } from "src/@types/Task";

export interface TaskModalState {
  isVisible: boolean;
  category?: Categories | undefined;
  mode: TaskMode;
  selectedtask: TaskItemType | undefined;
}

const initialState: TaskModalState = {
  isVisible: false,
  mode: undefined,
  selectedtask: undefined,
};

export const dakrModeSlice = createSlice({
  name: "taskModal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        category: Categories | undefined;
        mode: TaskMode;
        selectedtask: TaskItemType | undefined;
      }>
    ) => {
      const { category, mode, selectedtask } = action.payload;
      state.isVisible = true;
      state.category = category;
      state.mode = mode;
      state.selectedtask = selectedtask;
    },
    closeModal: (state) => {
      state.category = undefined;
      state.isVisible = false;
      state.mode = undefined;
      state.selectedtask = undefined;
    },
  },
});

export const { openModal, closeModal } = dakrModeSlice.actions;

export default dakrModeSlice.reducer;
