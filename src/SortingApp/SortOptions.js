import React from 'react';

const SortOptions = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div>
            <label>
                Sort by:
                <select onChange={handleSortChange}>
                    <option value="title">Title</option>
                    <option value="date">Date</option>
                </select>
            </label>
        </div>
    );
};

export default SortOptions;
