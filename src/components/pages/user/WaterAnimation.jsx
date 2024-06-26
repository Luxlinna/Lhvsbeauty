// npm install --save react-lottie

import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1716847892438.json';

const WaterAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Lottie options={defaultOptions} height={400} width={400} />
    );
}

export default WaterAnimation;
