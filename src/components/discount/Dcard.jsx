import React from 'react';
import Ddata from './Ddata';
import Slider from 'react-slick';


const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        margin: 20,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <Slider {...settings}>
            {Ddata.map((value, index) => (
                <div className="box" key={index}>
                    <div className="product p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="img mb-2">
                            <img src={value.cover} alt={value.name} className="w-full h-auto rounded-lg" />
                        </div>
                        <h4 className="text-lg font-semibold">{value.name}</h4>
                        <span className="text-gray-600 text-sm">{value.price}.00 SEK</span>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default Dcard;
