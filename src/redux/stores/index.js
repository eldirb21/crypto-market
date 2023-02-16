import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import _debounce from 'lodash/debounce';
import {batchedSubscribe} from 'redux-batched-subscribe';

const preloadedState = {
  // todos: [
  //     {
  //         text: 'Eat food',
  //         completed: true,
  //     },
  //     {
  //         text: 'Exercise',
  //         completed: false,
  //     },
  // ],
  // visibilityFilter: 'SHOW_COMPLETED',
};

const debounceNotify = _debounce(notify => notify());

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [batchedSubscribe(debounceNotify)],
});
export default store;
