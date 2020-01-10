import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductListPage extends Component {
   
    componentDidMount(){
        this.props.fetchProducts();
    }

    onRemove = (id) => {
        if(confirm("Bạn có chắc muốn xóa?")){        //eslint-disable-line
            this.props.removeProduct(id);
        }
    }

    findIndex(products,id){
        var result = -1;
        products.forEach((product,index)=>{
            if(product.id === id) {
                result=index;
            }
        });
        return result;
    }

    render() {
        var {products}=this.props;
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to="/product/add" className="btn btn-info mb-10">Thêm sản phẩm</Link>

                <ProductList>{this.ShowProducts(products)}</ProductList>

            </div>
        );
    }

    ShowProducts(products) {
        var result = null;
        if(products.length > 0){
            result = products.map((product,index) => {
                return(
                    <ProductItem key={index}
                            product={product}
                            index={index}
                            onRemove={this.onRemove}
                    />
                );
            })
        }
        return result;
    }
}

const mapStatetoProps = (state) => {
    return{
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchProducts: ()=> {
            dispatch(actions.fetchProductsReques());
        },
        removeProduct: (id) => {
            dispatch(actions.removeProductReques(id));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(ProductListPage);
