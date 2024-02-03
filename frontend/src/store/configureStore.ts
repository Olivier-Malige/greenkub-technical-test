/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';

import numbersReducer from './numbers/slice';
import rootSaga from './rootSaga';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer({
      numbers: numbersReducer,
    }),
    middleware: (gDM) => gDM().concat(middlewares),
    devTools: window.location.hostname === 'localhost',
    enhancers,
  });

  runSaga(rootSaga);

  return store;
}

const store = configureAppStore();
export default store;
