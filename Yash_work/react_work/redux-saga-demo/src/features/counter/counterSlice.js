import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },

  
    incrementAsync() {},
    startAutoIncrement() {},
    stopAutoIncrement() {},
  },
});

export const {
  increment,
  decrement,
  incrementAsync,
  startAutoIncrement,
  stopAutoIncrement,
} = counterSlice.actions;

export default counterSlice.reducer;
