import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return res.json();
  }
);
const start={
    users: [{"name":"Yash"}],
    loading: false,
    error: null,
}

const usersSlice = createSlice({
  name: "users",
  initialState: start,
  reducers: {},
  extraReducers: (e) => {
    e
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users =action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
