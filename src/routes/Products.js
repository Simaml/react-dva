import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    return (
        <div>
            <a href="/">返回</a>
            <ProductList onDelete={handleDelete} products={products} />
        </div>
    );
};

export default connect(({ products }) => ({
    products,
}))(Products);
