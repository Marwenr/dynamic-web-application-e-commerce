import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

export const createAccount = createAsyncThunk(
  "createAccount",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(auth.currentUser, {
        displayName: data.displayName,
      });
      const serializedRes = res.user.toJSON();
      return serializedRes;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logInFnc = createAsyncThunk(
  "logInFnc",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const serializedRes = res.user.toJSON();
      return serializedRes;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logOutFnc = createAsyncThunk("logOutFnc", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    await signOut(auth);
    return {};
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {} },
  extraReducers: (builder) => {
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(logInFnc.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    
    builder.addCase(logOutFnc.fulfilled, (state, action) => {
      state.user = action.payload;
    });

  },
});

export default authSlice.reducer;
