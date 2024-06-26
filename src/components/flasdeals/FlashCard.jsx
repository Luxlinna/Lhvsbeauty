import React, { useState } from 'react';
import Slider from 'react-slick';
import Data from './Data';


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    );
}
    
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='control-btn' onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    );
}

const FlashCard = ({  addToCart }) => {
    const [productItems, setProductItems] = useState(Data.productItems);
    
    // Function to increment product count
    const increment = (index) => {
        const updatedProductItems = [...productItems];
        updatedProductItems[index].count += 1;
        setProductItems(updatedProductItems);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
            {productItems.map((product, id) => (
                <div key={id} className='box my-5'>
                    <div className='product mtop hover:shadow-lg transition duration-300 ease-in-out'>
                        <div className='img'>
                            <span className='discount'>{product.discount}% Off</span>
                            <img src={product.cover} alt='' />
                            <div className='product-like'>
                                <label>{product.count}</label> <br/>
                                <i className='fa fa-heart' onClick={() => increment(id)}></i>
                            </div>
                        </div>
                        <div className='product-details'>
                            <h3>{product.name}</h3>
                            <div className='rate'>
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className='fas fa-star'></i>
                                ))}                        
                            </div>
                            <div className='price'>
                                <h4>{product.price}.00 SEK</h4>
                                <button onClick={() => addToCart(product)}>
                                    <i className='fa fa-shopping-cart'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default FlashCard;


