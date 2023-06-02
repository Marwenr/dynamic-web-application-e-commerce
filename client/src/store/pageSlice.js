import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHomePage = createAsyncThunk(
  "getHomePage",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3005/api/pages/home`);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
);

export const addElem = createAsyncThunk(
  "addElem",
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3005/api/pages/add`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteElem = createAsyncThunk(
  "deleteElem",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3005/api/pages/delete/${id}`, {
        method: "DELETE",
      });
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }
);

const pageSlice = createSlice({
  name: "page",
  initialState: { homePage: [] },
  extraReducers: (builder) => {
    builder.addCase(getHomePage.fulfilled, (state, action) => {
      state.homePage = action.payload;
    });

    builder.addCase(addElem.fulfilled, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(deleteElem.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default pageSlice.reducer;
