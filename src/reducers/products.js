import * as types from './../constants/ActionTypes';

var initialState = [];

function findIndex (products,id) {
    var result = -1;
    products.forEach((product,index)=>{
        if(product.id === id) {
            result=index;
        }
    });
    return result;
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case types.REMOVE_PRODUCT:
            var index = findIndex(state,action.id);
            state.splice(index,1);
            return [...state];
        case types.SAVE_PRODUCT:
            var product = action.product;
            product.id=state[state.length - 1].id+1;
            state.push(product);
            console.log(state);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state,action.product.id);
            state[index] = action.product;
            return[...state];
        default:
            return [...state];
    }
}

export default myReducer;