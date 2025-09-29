import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "@/api";

interface LoginDto {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  token: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string[] | null;
}

const SLICE_NAME = "auth";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

interface APIError {
  response?: {
    data?: {
      errors?: string[];
    };
  };
  message: string;
}

// 🔹 типізація помилки через unknown
const login = createAsyncThunk<User, LoginDto, { rejectValue: string[] }>(
  `${SLICE_NAME}/login`,
  async (userData, thunkAPI) => {
    try {
      const { data } = await API.login(userData);
      console.log(data.user.tokenPair);
      return data.user;
    } catch (err: unknown) {
      const error = err as APIError;
      return thunkAPI.rejectWithValue(
        error.response?.data?.errors || [error.message]
      );
    }
  }
);

const refresh = createAsyncThunk<User, string, { rejectValue: string[] }>(
  `${SLICE_NAME}/refresh`,
  async (refreshToken, thunkAPI) => {
    try {
      const { data } = await API.refresh(refreshToken);
      return data.user;
    } catch (err: unknown) {
      const error = err as APIError;
      return thunkAPI.rejectWithValue(
        error.response?.data?.errors || [error.message]
      );
    }
  }
);

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || ["Unknown error"];
      })

      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || ["Unknown error"];
      });
  },
});

const { reducer: authReducer, actions } = authSlice;

export const { logout } = actions;

export { login, refresh };

export default authReducer;
