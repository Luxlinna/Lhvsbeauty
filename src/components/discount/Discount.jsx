import React from 'react';
import Dcard from './Dcard';
import './discounts.css';

const Discount = () => {
    return (
        <section className="discounts bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/windows/32/fa314a/gift.png" alt="Gift" className="mr-2" />
                        <h1 className="text-2xl font-bold">Big Discounts</h1>
                    </div>
                    <div>
                        <a href="/products" className="flex items-center text-blue-500 hover:text-blue-700">
                            <span className="mr-2">View all</span>
                            <i className="fas fa-caret-right"></i>
                        </a>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
                    <Dcard />
                    {/* Render Dcard components here */}
                {/* </div> */}
            </div>
        </section>
    );
}

export default Discount;
