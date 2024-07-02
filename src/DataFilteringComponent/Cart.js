import React from 'react';
import './index.css';

const Cart = ({ products }) => {
    return (
        <div className='cart-container'>
            <h2>Cart</h2>
            {products.length === 0 ? (
                <p>No products in cart.</p>
            ) : (
                products.map(product => (
                    <div key={product.id} className='cart-product'>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
