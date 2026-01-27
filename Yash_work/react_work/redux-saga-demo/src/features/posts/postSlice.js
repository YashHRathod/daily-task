import { createSlice, current } from '@reduxjs/toolkit';
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostRequested(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      console.log(current(state));
    },
    fetchPostFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostRequested, fetchPostSuccess, fetchPostFailed } = postSlice.actions;
export default postSlice.reducer;
