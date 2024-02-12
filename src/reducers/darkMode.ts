import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface DarkModeState {
  value: boolean;
}

// Define the initial state using that type
const initialState: DarkModeState = {
  value: true,
};

export const dakrModeSlice = createSlice({
  name: "dakrMode",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = dakrModeSlice.actions;

export const isDarkMode = (state: RootState) => state.dakrMode.value;

export default dakrModeSlice.reducer;
