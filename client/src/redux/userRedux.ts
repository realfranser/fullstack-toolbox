import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  firstName: string;
  lastName: string;
  nickname: string;
  phone: string;
  token: string;
}

export interface IUserSliceState {
  currentUser: IUser;
  isFetching: boolean;
  error: boolean;
}

const DefaultUserInitialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: DefaultUserInitialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
