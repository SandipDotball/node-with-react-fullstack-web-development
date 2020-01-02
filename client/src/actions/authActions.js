import axios from 'axios';
import { LOAD_USER, UNLOAD_USER, LOGOUT_USER } from '../constants/actionTypes';

export const loadUser = () => async dispatch => {
  try {
    const user = await axios.get('/api/current_user');
    dispatch({
      type: LOAD_USER,
      payload: user.data
    });
  } catch (error) {
    dispatch({
      type: UNLOAD_USER
    });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const user = await axios.get('/api/logout');
    dispatch({
      type: LOGOUT_USER,
      payload: undefined
    });
  } catch (error) {
    dispatch({
      type: UNLOAD_USER
    });
  }
};
