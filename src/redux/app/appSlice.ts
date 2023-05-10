import { createSlice } from "@reduxjs/toolkit";
import { appState } from "../../types/appState";

const initialState: appState = {
  user: {},
  loading: false,
  config: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFrontendConfig: (state, action) => {
      state.config = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAppLoading, setFrontendConfig, setUser } = appSlice.actions;
export default appSlice.reducer;
