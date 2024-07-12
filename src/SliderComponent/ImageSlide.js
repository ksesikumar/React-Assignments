import React from 'react';

const ImageSlide = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt="Slide" style={{ width: '600px', height: '400px' }} />
        </div>
    );
};

export default ImageSlide;
