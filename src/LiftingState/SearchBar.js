import React from 'react';

const SearchBar = ({ onSearchItemChange }) => {
    const handleInputChange = (event) => {
        onSearchItemChange(event.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search products..." onChange={handleInputChange} />
        </div>
    );
};

export default SearchBar;
