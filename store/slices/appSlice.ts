import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAsyncThunk } from "../asyncThunk/userSessionAsyncThunk";
import { RootState } from "../store";

export interface IAppState {
  isLoadingApp: boolean;
  statusTheme: "light" | "dark"; // status bar theme
}

const initialState: IAppState = {
  isLoadingApp: false,
  statusTheme: "light",
};

export const userSessionSlice = createSlice({
  name: "appState",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // stores login email in storage and redux store
    showLoader: (state) => {
      state.isLoadingApp = true;
    },
    hideLoader: (state) => {
      state.isLoadingApp = false;
    },
    updateTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.statusTheme = action.payload;
    },
  },
  // add in async reducers for api requests
  extraReducers: (builder) => {
    builder
      // show loader for login request
      .addCase(loginAsyncThunk.pending, (state) => {
        state.isLoadingApp = true;
      })
      // hide loader for login request
      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        state.isLoadingApp = false;
      })
      // hide laoder on request err
      .addCase(loginAsyncThunk.rejected, (state) => {
        state.isLoadingApp = false;
      });
  },
});

export const { showLoader, hideLoader, updateTheme } = userSessionSlice.actions;

// get loader
export const getIsLoadingApp = (state: RootState) =>
  state.appReducer.isLoadingApp;

// get theme
export const getStatusTheme = (state: RootState) =>
  state.appReducer.statusTheme;

export default userSessionSlice.reducer;
