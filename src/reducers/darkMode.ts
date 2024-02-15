import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface DarkModeState {
  value: boolean;
}

const localTheme = localStorage.getItem("darkMode");

const isLocallyDark = localTheme ? localTheme === "true" : false;

const initialState: DarkModeState = {
  value: isLocallyDark,
};

export const dakrModeSlice = createSlice({
  name: "dakrMode",
  initialState,
  reducers: {
    toggle: (state) => {
      localStorage.setItem("darkMode", String(!state.value));
      state.value = !state.value;
    },
  },
});

export const { toggle } = dakrModeSlice.actions;

export const isDarkMode = (state: RootState) => state.dakrMode.value;

export default dakrModeSlice.reducer;
