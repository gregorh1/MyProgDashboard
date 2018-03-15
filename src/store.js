import {combineReducers, createStore} from 'redux';
import reducer from './reducers/reducer';

const store = createStore(
    combineReducers({
        reducer})
);

export default store;
