import React, { useState } from 'react';

const ChildComponent = ({ addItem }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            addItem(inputValue);
            setInputValue(''); // Clear the input after adding the item
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter new item"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ChildComponent;
