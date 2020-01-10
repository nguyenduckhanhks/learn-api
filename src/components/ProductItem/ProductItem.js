import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onRemove = (id) => {
        this.props.onRemove(id);
    }

    render() {
        var { product, index } = this.props;
        return (

            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    {product.status ? 
                        <span className="label label-success">
                            Còn hàng
                        </span> : 
                        <span className="label label-warning">
                            Hết hàng
                        </span>
                    }

                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} className="btn btn-success mr-10" >Sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.onRemove(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
