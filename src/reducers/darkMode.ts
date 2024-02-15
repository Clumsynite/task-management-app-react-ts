import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface DarkModeState {
  value: boolean;
}

const isLocallyLight = localStorage.getItem("darkMode") === "false";

// const isLocallyDark = localTheme ? localTheme === "true" : false;

const initialState: DarkModeState = {
  value: !isLocallyLight,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle: (state) => {
      localStorage.setItem("darkMode", String(!state.value));
      state.value = !state.value;
    },
  },
});

export const { toggle } = darkModeSlice.actions;

export const isDarkMode = (state: RootState) => state.darkMode.value;

export default darkModeSlice.reducer;
