import {createStore, combineReducers} from 'redux';
import allIUsersReducer from './reducers/allIUsersReducer'

const allReducers = combineReducers({
    allIUsersReducer
});

const Store = createStore(allReducers);

export default Store;