import React from 'react';
import Newcart from './Newcart';
import './NewArrival.css';

const NewArrivals = () => {
    return (
        <>
            <section className='newarrivals my-10'>
                <div className="mx-auto py-12 px-5">
                    <div className='flex items-center justify-between '>
                        <div className='flex items-center'>
                            <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" className='w-8 h-8 mr-2' />
                            <h2 className='text-2xl text-black font-bold'>New Arrivals</h2>
                        </div>
                        <a className='text-gray-800 hover:text-red-400' href='/products'>
                            <span className='cursor-pointer md:pl-2'>
                                View All 
                                <i className='fa fa-caret-right md:pl-2'></i>
                            </span>
                        </a>
                    </div>
                </div>
                <Newcart />
            </section>
        </>
    );
}

export default NewArrivals;
