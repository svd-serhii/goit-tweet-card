import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, getUser } from './usersOperations';

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

    builder
      .addCase(getUser.pending, (state, { payload }) => state)
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.items.findIndex(item => item.id === payload?.id);
        state.items.splice(index, 1, payload);
      })
      .addCase(getUser.rejected, (state, action) => state);
  },
});
