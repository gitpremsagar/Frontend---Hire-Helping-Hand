import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    topLevelCategories: [],
    midLevelCategories: [],
    bottomLevelCategories: [],
  },
  reducers: {
    setTopLevelCategories: (state, action) => {
      state.topLevelCategories = action.payload;
    },
    setMidLevelCategories: (state, action) => {
      state.midLevelCategories = action.payload;
    },
    setBottomLevelCategories: (state, action) => {
      state.bottomLevelCategories = action.payload;
    },
  },
});

export const {
  setTopLevelCategories,
  setMidLevelCategories,
  setBottomLevelCategories,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
