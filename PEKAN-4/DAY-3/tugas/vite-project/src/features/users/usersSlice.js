import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async fetch data
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle", // idle | loading | succeeded | failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default usersSlice.reducer;
