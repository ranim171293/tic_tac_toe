import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createReducer from './Reducers/index'
import logger from 'redux-logger';




const store = createStore(createReducer(), {}, applyMiddleware(logger));

export default store