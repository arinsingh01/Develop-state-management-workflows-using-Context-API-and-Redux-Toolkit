import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice'; // Adjust the path as necessary

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items); // Adjust according to your state structure

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price}
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <button onClick={handleClearCart}>Clear Cart</button>
            )}
        </div>
    );
};

export default Cart;