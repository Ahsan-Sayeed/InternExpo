import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  setTheme: JSON.parse(localStorage.getItem('theme'))||false,
};

const SideNavSlice = createSlice({
  name: "SideNavMobileView",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    handleTheme: (state, action) => {
      if (action.payload) {
        state.setTheme = action.payload;
        localStorage.setItem('theme',state.setTheme);
        document.documentElement.setAttribute("data-theme", 'cupcake');
        document.documentElement.style.transition = "0.3s";
      } else {
        state.setTheme = action.payload;
        localStorage.setItem('theme',state.setTheme);
        document.documentElement.setAttribute("data-theme", 'dark');
        document.documentElement.style.transition = "0.5s";
      }
    },
  },
});

export const { setIsOpen, handleTheme } = SideNavSlice.actions;

export default SideNavSlice.reducer;
