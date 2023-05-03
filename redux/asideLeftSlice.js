import { createSlice } from "@reduxjs/toolkit";

export const asideLeftSlice = createSlice({
  name: "asideLeftSlice",
  initialState: {
    clickedTopLevelCategory: "",
  },
  reducers: {
    setClickedTopLevelCategory: (state, action) => {
      state.clickedTopLevelCategory = action.payload;
    },
  },
});

export const { setClickedTopLevelCategory } = asideLeftSlice.actions;

export default asideLeftSlice.reducer;
