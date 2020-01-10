import { combineReducers } from 'redux';
import products from './products';
import editting from './editting';

const myReducers = combineReducers({
    products,
    editting
});
export default myReducers;