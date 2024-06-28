import React, { useState } from 'react';
import ProductList from './ProductList';

const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: '₹129900', description: 'Apple\'s latest smartphone with A17 Bionic chip.' },
    { id: 2, name: 'Samsung Galaxy S21', price:'₹69999', description: 'Samsung\'s flagship with powerful Exynos 2100.' },
    { id: 3, name: 'OnePlus 9', price: '₹49999', description: 'High-performance phone with Snapdragon 888.' },
    { id: 4, name: 'Google Pixel 6', price: '₹59999', description: 'Google\'s newest phone with Tensor chip.' },
    { id: 5, name: 'Sony Xperia 5', price: '₹74999', description: 'Compact flagship with stunning 4K display.' },
    { id: 6, name: 'Nokia 8.3', price: '₹45999', description: '5G phone with PureView quad camera.' },
    { id: 7, name: 'Huawei P40', price: '₹64999', description: 'Photography-focused phone with Kirin 990 5G.' },
    { id: 8, name: 'Xiaomi Mi 11', price: '₹56999', description: 'Feature-rich phone with Snapdragon 888.' },
    { id: 9, name: 'Motorola Edge', price: '₹49999', description: 'Edge display phone with 108MP camera.' },
    { id: 10, name: 'Oppo Find X3', price: '₹61999', description: 'Innovative phone with 10-bit color system.' },
];

const Dashboard = () => {
    const [productList, setProductList] = useState(products);
    const [searchItem, setSearchItem] = useState('');

    const handleFilter = (event) => {
        setSearchItem(event.target.value);
    };

    const filteredProducts = productList.filter(product =>
        product.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchItem}
                onChange={handleFilter}
            />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Dashboard;
