import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import authReducer from "./authSlice";
import asideLeftReducer from "./asideLeftSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  authSlice: authReducer,
  asideLeftSlice: asideLeftReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
