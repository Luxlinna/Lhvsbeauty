import React from 'react';
import Ndata from './Ndata';
import Slider from 'react-slick';

const Newcart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Display 6 slides initially
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200, // Adjust breakpoints as needed
                settings: {
                    slidesToShow: 3, // Display 3 slides on larger screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Adjust breakpoints as needed
                settings: {
                    slidesToShow: 2, // Display 2 slides on medium screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Adjust breakpoints as needed
                settings: {
                    slidesToShow: 1, // Display 1 slide on smaller screens
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {Ndata.map((value, index) => (
                <div className='px-4' key={index}>
                    <div className='bg-white p-4 rounded-lg shadow-md'>  
                        <div className='card box aspect-w-1 aspect-h-1'>
                            <img src={value.cover} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>
                        <h4 className='text-lg font-semibold mt-2'>{value.name}</h4>
                        <span className='text-gray-600'>{value.price}.00 SEK</span>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default Newcart;

