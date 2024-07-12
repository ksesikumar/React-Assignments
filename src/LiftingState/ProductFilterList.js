import React from 'react';

const ProductFilterList = ({ products }) => {
    return (
          <div>
            {products.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}

        </div>
    );
};

export default ProductFilterList;
