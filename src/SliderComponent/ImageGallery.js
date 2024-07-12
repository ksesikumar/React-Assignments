import React, { useState } from 'react';
import ImageSlide from './ImageSlide';

const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
];

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <ImageSlide imageUrl={images[currentIndex]} />
            <div>
                <button onClick={goToPreviousSlide}>Previous</button>
                <button onClick={goToNextSlide}>Next</button>
            </div>
        </div>
    );
};

export default ImageGallery;
