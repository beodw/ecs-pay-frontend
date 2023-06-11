// Register.ts

import { Dispatch } from 'redux';
import { setUser } from '../../../redux/app/appSlice';
import axiosInstance from '../../../config';

export const register = async (userdetails: object, dispatch: Dispatch) => {
  try {
    const response = await axiosInstance.post('/register', { userdetails });
    const { token } = response.data;

    dispatch(setUser(token));
  } catch (error) {

    console.error('Login failed:', error);
    throw error;
  }
};

