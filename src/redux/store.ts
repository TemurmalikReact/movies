import { combineReducers, createStore } from 'redux';
import showsReducer from './showsReducer';

const reducers = combineReducers({
  shows: showsReducer,
});

export type ReducerType = ReturnType<typeof reducers>;

const store = createStore(reducers);

export default store;
