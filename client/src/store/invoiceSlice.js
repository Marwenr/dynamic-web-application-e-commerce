import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getInvoice = createAsyncThunk(
  "getInvoice",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/api/sales/getInvoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      return result;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const postInvoice = createAsyncThunk(
  "postInvoice",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/api/sales/postInvoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      return result;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);


const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    receipts: [],
    msg: "",
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getInvoice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getInvoice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.receipts = action.payload
    });

    builder.addCase(postInvoice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postInvoice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload.msg
    });
  },
});

export default invoiceSlice.reducer;
