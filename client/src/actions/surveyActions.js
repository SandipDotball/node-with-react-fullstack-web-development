import axios from 'axios';

import { SUBMIT_SURVEY } from '../constants/actionTypes';

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values);
    dispatch({
      type: SUBMIT_SURVEY,
      payload: res.data.credits
    });
    history.push('/surveys');
  } catch (error) {
    console.log(error);
  }
};
