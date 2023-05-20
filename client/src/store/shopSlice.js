import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDataByName = createAsyncThunk(
  "getDataByName",
  async (dataName, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/${dataName}`);
      const jsonData = await res.json()
      const data = { name: dataName, data: jsonData };
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: { categories: [], items: [], subcategories: [], offers: [] },
  extraReducers: (builder) => {
    builder.addCase(getDataByName.fulfilled, (state, action) => {
      const name = action.payload.name
      const data = action.payload.data
      if (name === "categories") {
        state.categories = data
      }
      if (name === "subcategories") {
        state.subcategories = data
      }
      if (name === "offers") {
        state.offers = data
      }
      if (name === "items") {
        state.items = data
      }
    });
  },
});

export default shopSlice.reducer;
