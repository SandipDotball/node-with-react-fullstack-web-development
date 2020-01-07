import {
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SEND_USER_PAYMENT,
  ERROR_SEND_USER_PAYMENT,
  SUBMIT_SURVEY
} from '../constants/actionTypes';

const initilizeState = {
  user: null,
  loading: true
};

const authReducer = (state = initilizeState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case LOAD_USER:
      return { user: action.payload || false, loading: false };
    case SEND_USER_PAYMENT:
    case SUBMIT_SURVEY:
      return { ...state, user: { ...state.user, credits: action.payload } };
    case ERROR_SEND_USER_PAYMENT:
      return { ...state, user: { ...state.user, credits: 0 } };
    case LOGOUT_USER:
      return { user: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;
