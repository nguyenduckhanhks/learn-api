import React, { Component } from 'react';
import callApi from './../../utils/callApi';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            status: false
        }
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            this.props.editting(match.params.id);
            var product = this.props.productEditting;
            this.setState({
                id:product.id,
                name:product.name,
                price:product.price,
                status:product.status
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]:value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, name, price, status} = this.state;
        if(id){
            this.props.updateProduct({
                id: id,
                name: name,
                price: price,
                status: status,
            },this.props.history);
        }else{
            this.props.saveProduct({
                name: name,
                price: price,
                status: status,
            },this.props.history);    
        }
    }

    render() {
        var { name, price, status } = this.state;
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>

                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input type="text"
                            className="form-control"
                            required
                            name="name"
                            value={name}
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label >Giá</label>
                        <input type="nummber"
                                 className="form-control" 
                                 name="price"
                                 value={price}
                                 onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Trạng thái</label>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" 
                                        name="status"
                                        value={status}
                                        onChange={this.onChange}
                                        checked={status}/>
                                Còn hàng
                            </label>
                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary">Lưu lại</button>

                </form>

            </div>

        )
    }
}

const mapStatetoProps = (state) => {
    return{
        productEditting: state.editting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        saveProduct: (product,history) => {
            dispatch(actions.saveProductReques(product,history))
        },
        editting: (id) => {
            dispatch(actions.edittingProductReques(id));
        },
        updateProduct: (product,history) => {
            dispatch(actions.updateProductReques(product,history));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(ProductActionPage);