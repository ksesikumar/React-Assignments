import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductFilterList from './ProductFilterList';

const ProductFilterApp = () => {
    const [products] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' }
    ]);

    const [searchItem, setSearchItem] = useState('');

    const handleSearchItemChange = (item) => {
        setSearchItem(item);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div>
            <h1>Product Filter</h1>
            <SearchBar onSearchItemChange={handleSearchItemChange} />
            <ProductFilterList products={filteredProducts} />
        </div>
    );
};

export default ProductFilterApp;
