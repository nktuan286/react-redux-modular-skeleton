import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '@modules/user/redux/reducer';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: []
};

const rootReducer = persistCombineReducers(persistConfig, {
  userReducer
});

export default rootReducer;
