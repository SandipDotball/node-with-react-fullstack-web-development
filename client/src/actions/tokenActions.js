import axios from 'axios';
import {
  SEND_USER_PAYMENT,
  ERROR_SEND_USER_PAYMENT
} from '../constants/actionTypes';

export const handleToken = token => async dispatch => {
  try {
    const payment = await axios.post('/api/stripe', token);
    console.log(payment);
    dispatch({
      type: SEND_USER_PAYMENT,
      payload: payment.data.credits
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR_SEND_USER_PAYMENT
    });
  }
};
