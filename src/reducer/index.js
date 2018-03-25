import {combineReducers} from 'redux';
import persons from './persons';
import searching from './searching';
import sorting from './sorting';
import page from './page';
import detailedInf from './detailedInf';

export default combineReducers({
    persons,
    searching,
    sorting,
    page,
    detailedInf
});