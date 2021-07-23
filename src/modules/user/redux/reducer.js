import { createReducer } from 'reduxsauce';

const defaultState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
};

export default createReducer(defaultState, {});
