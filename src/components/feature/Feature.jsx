import React from 'react';
import './Feature.css';
import FreeShippingImage from '../../images/feature/freeshipping.png';
import OrderOnlineImage from '../../images/feature/orderonline.png';
import SavingMoneyImage from '../../images/feature/savingmoney.png';
import SupportImage from '../../images/feature/support.png';

const Feature = () => {
    const data = [
        {
            cover: FreeShippingImage,
            title: "Free Shipping",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: OrderOnlineImage,
            title: "Online Order",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: SavingMoneyImage,
            title: "Save money",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: SupportImage,
            title: "24/7 support",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]

    return (
        <>
            <section className='feature justify-center items-center mx-2 md:mx-20 my-5'>
                <h2 className='text-4xl font-semibold text-center my-10'>Feature</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {data.map((value, index) => (
                        <div className='bg-indigo-100 rounded-lg p-4 md:p-5 
                            border-gray-300 hover:shadow-lg transition 
                            duration-300 ease-in-out' 
                            key={index}
                        >
                            <div className='img'>
                                <img src={value.cover} alt='' />
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

export default Feature;
