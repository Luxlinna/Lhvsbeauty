import React from 'react';
import FlashCard from './FlashCard';

const FlashDeals = ({ productItems, addToCart }) => {
    if(!productItems || productItems.length === 0) {
        return <p>No products available</p>
    }

    return (
        <>
            <section className='flash bg-gray-200 pt-10 pb-5'>
                <div className="container mx-auto px-4">
                    <div className='flex items-center'>
                        <i className='fas fa-bolt text-yellow-500 mr-2'></i>
                        <h1 className='text-2xl font-bold'>Flash Deals</h1>
                    </div>
                    <FlashCard productItems={productItems} addToCart={addToCart}/> {/* Pass productItems and addToCart function */}
                </div>
            </section>
        </>
    );
}

export default FlashDeals;
