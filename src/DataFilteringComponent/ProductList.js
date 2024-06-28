import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
