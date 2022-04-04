import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ILoginResponse, loginApi } from "../../api/auth.api";
import { LoginDto } from "../../dtos/auth.dto";

/**
 * Async method that makes request to check user credentials
 */
export const loginAsyncThunk = createAsyncThunk<any, any>(
  "userSession/login",
  async (payload: LoginDto, { rejectWithValue }) => {
    try {
      // make api request to verify reset code
      const response: ILoginResponse = await loginApi(payload);

      return response;
    } catch (err: any) {
      const error: AxiosError<any> = err; // cast the error for access

      if (!error.response) {
        throw err;
      }

      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue({
        payload: error.response.data,
        status: error.response.status,
      });
    }
  }
);

