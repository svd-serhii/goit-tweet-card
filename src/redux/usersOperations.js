import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from './api';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
