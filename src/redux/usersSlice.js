import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state, { payload }) => state)
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.items = payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => state);
  },
});
