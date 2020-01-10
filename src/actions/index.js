import * as types from './../constants/ActionTypes';
import callApi from './../utils/callApi';

export const fetchProductsReques = () => {
    return(dispatch)=>{
        return callApi('products','GET',null).then((res)=> {
            dispatch(fetchProducts(res.data));
        })
    }
}

export const fetchProducts = (products) => {
    return{
        type: types.FETCH_PRODUCT,
        products
    }
}

export const removeProductReques = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'DELETE',null).then(res =>{
            dispatch(removeProduct(id));
        });
    }
}

export const removeProduct = (id) => {
    return {
        type: types.REMOVE_PRODUCT,
        id
    }
}

export const saveProductReques = (product,history) => {
    return (dispatch)=>{
        return callApi(`products`,'POST',product).then(res=> {
            dispatch(saveProduct(product));
            history.goBack();
        })
    }
}

export const saveProduct = (product) => {
    return {
        type:types.SAVE_PRODUCT,
        product
    }
}

export const updateProductReques = (product,history)=>{
    return (dispatch) => {
        return callApi(`products/${product.id}/edit`,'PUT',product).then(res=>{
            dispatch(updateProduct(product));
            history.goBack();
        })
    }
}

export const updateProduct = (product) => {
    return{
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const edittingProductReques = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`,'GET',null).then(res=> {
            dispatch(edittingProduct(res.data));
        })
    }
}

export const edittingProduct = (product) => {
    return{
        type:types.EDITTING,
        product
    }
}