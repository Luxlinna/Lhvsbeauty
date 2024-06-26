import React from 'react';
import TopCart from './TopCart';
import './TopCate.css';

const TopCate = () => {
    return (
        <>
            <section className='topCat bg-green-100 pb-10 pt-5 px-20'>
                <div className='containe px-4'>
                    <div className='md:flex md:justify-between md:items-center md:my-5 gap-5'>
                        <h2 className='text-xl font-semibold md:ml-2'>Top Categories</h2>
                        <div className='flex items-center mt-4 md:mt-0 md:ml-0 md:mr-2'>
                            <a href="/products" className='text-blue-500 hover:text-blue-700 pr-2 md:pr:10'>
                                View All
                                <i className='fas fa-caret-right ml-1'></i>
                            </a>
                        </div>
                    </div>
                    <TopCart />     
                </div>
            </section>
        </>
    );
}

export default TopCate;
