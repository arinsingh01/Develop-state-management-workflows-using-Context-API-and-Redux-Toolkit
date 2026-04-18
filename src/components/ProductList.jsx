import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, updateProduct, removeProduct } from '../actions/productActions';

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleAdd = (newProduct) => {
        dispatch(addProduct(newProduct));
    };

    const handleUpdate = (id, updatedProduct) => {
        dispatch(updateProduct(id, updatedProduct));
    };

    const handleRemove = (id) => {
        dispatch(removeProduct(id));
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}> 
                        {product.name} - ${product.price}
                        <button onClick={() => handleUpdate(product.id, { name: 'Updated Product', price: product.price + 1 })}>Update</button>
                        <button onClick={() => handleRemove(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleAdd({ id: products.length + 1, name: 'New Product', price: 10 })}>Add Product</button>
        </div>
    );
};

export default ProductList;