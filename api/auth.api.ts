import axiosInstance from "../config/axios.config";
import { LoginDto } from "../dtos/auth.dto";

// base API path for api requests
const BASE_URL = `/pocket-counselor/auth`;

export interface ILoginResponse {
  token: string;
}

/**
 * Sends api request for user's profile info
 * @returns user profile obj
 */
export const loginApi = async (credentials:LoginDto): Promise<ILoginResponse> => {
  const url = `${BASE_URL}/login`;

  const response = await axiosInstance.get(url);

  // return user profile
  return response.data.payload;
};
