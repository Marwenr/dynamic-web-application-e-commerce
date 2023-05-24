import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4();

export const getDataByName = createAsyncThunk(
  "getDataByName",
  async (dataName, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/api/market/${dataName}`);
      const jsonData = await res.json();
      const data = { name: dataName, data: jsonData };
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const postArticle = createAsyncThunk(
  "postArticle",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      data._id = id;
      const res = await fetch(`http://localhost:3005/api/market/postItem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      const articleData = {
        msg: result.msg,
        data,
      };
      return articleData;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const putUpdateArticle = createAsyncThunk(
  "putUpdateArticle",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/api/market/updateItem`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      const articleData = {
        msg: result.msg,
        data,
      };
      return articleData;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const postNewCategory = createAsyncThunk(
  "postNewCategory",
  async (name, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = {
        name,
        _id: id,
      };
      const res = await fetch(`http://localhost:3005/api/market/newCategory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      const newCat = {
        msg: result.msg,
        data,
      };
      return newCat;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const postNewSubcategory = createAsyncThunk(
  "postNewSubcategory",
  async (subData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = {
        name: subData.name,
        category: subData.category,
        _id: id,
      };
      const res = await fetch(
        `http://localhost:3005/api/market/newSubcategory`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      const newCat = {
        msg: result.msg,
        data,
      };
      return newCat;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: [],
    items: [],
    subcategories: [],
    offers: [],
    msg: "",
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getDataByName.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDataByName.fulfilled, (state, action) => {
      state.isLoading = false;
      const name = action.payload.name;
      const data = action.payload.data;
      if (name === "categories") {
        state.categories = data;
      }
      if (name === "subcategories") {
        state.subcategories = data;
      }
      if (name === "offers") {
        state.offers = data;
      }
      if (name === "items") {
        state.items = data;
      }
    });

    builder.addCase(postArticle.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload.msg;
      state.items.push(action.payload.data);
    });

    builder.addCase(putUpdateArticle.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(putUpdateArticle.fulfilled, (state, action) => {
      state.isLoading = true;
      // const items = JSON.parse(JSON.stringify(state.items));
      // const newItems = items.map((item) =>
      //   item.reference === action.payload.data.reference
      //     ? action.payload.data
      //     : item
      // );
      // state.items = newItems;
    });

    builder.addCase(postNewCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postNewCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload.msg;
      state.categories.push(action.payload.data);
    });

    builder.addCase(postNewSubcategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postNewSubcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.msg = action.payload.msg;
      state.subcategories.push(action.payload.data);
    });
  },
});

export default shopSlice.reducer;
