import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import api from '../middlewares/api';
import debounce from '../middlewares/debounce';

const enhancer = applyMiddleware(api, debounce);

const store = createStore(reducer, {}, enhancer);

export default store;