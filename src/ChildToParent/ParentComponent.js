import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Items List</h1>
          
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            
            <ChildComponent addItem={addItem} />
        </div>
    );
};

export default ParentComponent;
