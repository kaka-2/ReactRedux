import { combineReducers } from 'redux';
import fetchDataReducers from './fetchData';

export default combineReducers({
    data: fetchDataReducers
})