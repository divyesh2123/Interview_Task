import { createSlice } from "@reduxjs/toolkit";
import { api, apisave } from "../CreateApi";

const initialState = {
  leaves: [],
  status: 'idle',
  error: null
};

const leaveSlice = createSlice({
    name: 'leave',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Fetch leaves
      builder
        .addCase(api.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(api.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.leaves = action.payload;
        })
        .addCase(api.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })

        .addCase(apisave.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(apisave.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.leaves.push(action.payload);
        })
        .addCase(apisave.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });


    }
});

export default leaveSlice.reducer;
