import React from 'react';
import Tdata from './Tdata';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if (!Tdata) {
        return <h1>Loading.....</h1>
    }

    return (
        <>  
            <Slider {...settings}>
                {Tdata.map((value, index) => {
                    return (
                        <div key={index} className='box space-x-2'>
                            <div className='mx-5 bg-pink-100 rounded-lg p-4 md:p-4 
                            border-gray-300 hover:shadow-lg transition 
                            duration-300 ease-in-out' >
                                <div className='toplabel flex justify-between'>
                                    <span className='text-left'>{value.title}</span>
                                    <span className='text-right'>{value.desc}</span>
                                </div>
                                <div className='img'>
                                    <img src={value.image} alt='' />
                                </div>
                            </div>
                           
                        </div>
                    );
                })}  
            </Slider>
        </>
    );
}

export default TopCart;
