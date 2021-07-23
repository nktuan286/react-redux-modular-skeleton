/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import loggerConfig from './logger';

const history = require('history').createBrowserHistory();

const isProduction = process.env.REACT_APP_ENV === 'production';

export { history };

// Create store
const createAppStore = () => {
  let store = null;
  let persistor = null;
  let middleware = null;
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  if (isProduction) {
    // Producction middlewares
    middleware = applyMiddleware(sagaMiddleware, routerMiddleware);
  } else {
    // Filter out persit and router actions
    const logger = createLogger(loggerConfig);

    // Development middlewares
    middleware = applyMiddleware(sagaMiddleware, routerMiddleware, logger);

    // Enable redux devtool if browser extension is installed
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  store = createStore(rootReducer, middleware);

  sagaMiddleware.run(rootSaga);
  // begin periodically persisting the store
  persistor = persistStore(store, null, () => store.getState());

  // Return store and persistor instance
  return { store, persistor };
};

const { store, persistor } = createAppStore();

export { store, persistor };
