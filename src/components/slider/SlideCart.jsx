import React from 'react';
import Sdata from './Sdata';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const SlideCart = () => {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        
    };

    return (
        <Slider {...setting}>
            {Sdata.map((value, index) => (
                <div className='box my-10' key={index}>
                    <div className="container flex flex-col gap-8 md:flex-row-reverse items-center md:items-start mx-5 md:mx-20 my-5 md:my-10 md:justify-between">
                        <div className='left img md:order-2'>
                            <img 
                                src={value.image} 
                                alt={value.title} 
                            />
                        </div>
                        <div className='right md:order-1'>
                            <h1 className='text-2xl font-bold mb-3 md:mb-5'>{value.title}</h1>
                            <p className="text-sm md:text-base pb-2">{value.desc}</p>
                            <Link to={`/products`}>
                                <button 
                                    className='px-5 py-3 mt-3 md:mt-4 bg-blue-500 text-white md:text-xl text-sm rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
                                >
                                    Visit Collections
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SlideCart;

