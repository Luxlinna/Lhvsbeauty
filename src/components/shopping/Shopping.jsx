import React from 'react';
import Categories from './Categories';
import ShopCart from './ShopCart';
import './Style.css';

const Shopping = ({ addToCart, shopItems }) => {
    return (
        <>
            <section className='shop bg-gray-200 py-10'>
                <div className="container flex flex-col md:flex-row">
                    <Categories className='category' />                    
                    <div className="contentWidth md:ml-8">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                 <h2 className="text-xl md:text-2xl font-semibold">Skin Care</h2>
                            </div>
                            <div>
                                <span className="text-sm md:text-base">All Products</span>
                                <i className="fa fa-caret-right ml-1"></i>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Render ShopCart component with shopItems */}
                            <ShopCart addToCart={addToCart} shopItems={shopItems} />    
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shopping;

