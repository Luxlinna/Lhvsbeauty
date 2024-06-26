import React from 'react';
import './About.css';
import Product1 from './Aproducts/poduct-1.png';
import Product2 from './Aproducts/poduct-2.png';
import Product3 from './Aproducts/poduct-3.png';
import Product4 from './Aproducts/poduct-1.png';

const AboutFeature = () => {
    const data = [
        {
            cover: Product1,
            title: "Eyes Shadow",
            decs: "An essential product for your daily routine.",
        },
        {
            cover: Product2,
            title: "Smooth Cusion",
            decs: "A great product that nourishes your skin.",
        },
        {
            cover: Product3,
            title: "Oil Skin",
            decs: "An essential product for your daily routine.",
        },
        {
            cover: Product4,
            title: "Eyes Shadow",
            decs: "An essential product for your daily routine.",
        },
    ]

    return (
        <>
            <section className='about justify-center items-center mx-2 md:mx-20 my-5'>
                <h2 className='text-4xl font-semibold text-center my-10 text-purple-900'>Product Feature</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {data.map((value, index) => (
                        <div className='bg-blue-200 rounded-lg p-4 md:p-5 
                            border-gray-300 hover:shadow-lg transition 
                            duration-300 ease-in-out' 
                            key={index}
                        >
                            <div className='img transform transition-transform hover:scale-105 hover:shadow-x'>
                                <img src={value.cover} alt='' className='transform transition-transform hover:scale-110 hover:shadow-x' />
                            </div>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-medium py-2 opacity-90'>{value.title}</h3>
                            <p className='text-sm md:text-base opacity-50'>{value.decs}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default AboutFeature;
