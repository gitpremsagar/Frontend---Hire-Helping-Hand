import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  authSlice: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
