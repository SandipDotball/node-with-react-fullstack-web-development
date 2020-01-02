import { LOAD_USER, LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes';

const initilizeState = {
  user: null,
  loading: true
};

const authReducer = (state = initilizeState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case LOAD_USER:
      return { user: action.payload || false, loading: false };
    case LOGOUT_USER:
      return { user: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;
