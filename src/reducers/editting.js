import * as types from './../constants/ActionTypes';

var initialState = {
    id:-1,
    name:'',
    price: 0,
    status: false
}

const myReducer = (state=initialState,action) => {
    switch(action.type){
        case types.EDITTING:
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default myReducer;