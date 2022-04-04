import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import { LoginDto } from "../../dtos/auth.dto";
import { RootState } from "../store";

export interface IUserSessionState {
  token: string | null;
  user: any | null;
  storedEmailed: string;
  isPullingProfile: boolean;
}

const initialState: IUserSessionState = {
  token: null,
  user: null,
  storedEmailed: "",
  isPullingProfile: false,
};

export const userSessionSlice = createSlice({
  name: "userSession",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // stores login email in storage and redux store
    setStoredEmail: (state, action: PayloadAction<string>) => {
      state.storedEmailed = action.payload;
    },

    setUser: (state, action: PayloadAction<any>) => {

      state.user = action.payload;
    },
    // clear login email from storage and redux store
    clearStoredEmail: (state) => {
      state.storedEmailed = "";
    },
    // stores jwt in storage and redux store
    setToken: (state, action: PayloadAction<string>) => {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${action.payload}`; // update auth headers with bearer token
      state.token = action.payload;
    },
    setLoginData: (state, action: PayloadAction<LoginDto>) => {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${action.payload.token}`; // update auth headers with bearer token
      state.token = action.payload.token;
    },
    // clear redux store of user data
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setStoredEmail, clearStoredEmail, logout, setToken, setUser, setLoginData} =
  userSessionSlice.actions;

// accessor for admin user
export const getUser = (state: RootState) => state.userSessionReducer.user;

// accessor for admin user token
export const getToken = (state: RootState) => state.userSessionReducer.token;

// get stored email
export const getEmail = (state: RootState) => state.userSessionReducer.storedEmailed;

// get profile loader
export const getIsPullingProfile = (state: RootState) =>
  state.userSessionReducer.isPullingProfile;


export default userSessionSlice.reducer;
