import React from 'react';
import './index.css';

const ProductList = ({ products }) => {
    return (
        <div className='card-container'>
            {products.map(product => (
                <div key={product.id} className='product-card'>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
