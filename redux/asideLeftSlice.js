import { createSlice } from "@reduxjs/toolkit";

export const asideLeftSlice = createSlice({
  name: "asideLeftSlice",
  initialState: {
    clickedTopLevelCategory: "",
    clickedMidLevelCategory: "",
  },
  reducers: {
    setClickedTopLevelCategory: (state, action) => {
      state.clickedTopLevelCategory = action.payload;
    },
    setClickedMidLevelCategory: (state, action) => {
      state.clickedMidLevelCategory = action.payload;
    },
  },
});

export const { setClickedTopLevelCategory, setClickedMidLevelCategory } =
  asideLeftSlice.actions;

export default asideLeftSlice.reducer;
