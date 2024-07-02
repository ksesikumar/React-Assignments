import React from 'react';
import './index.css';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className='card-container'>
            {products.map(product => (
                <div key={product.id} className='product-card'>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
