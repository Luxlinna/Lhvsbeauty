import React from 'react';
import banner from '../../images/banner-2.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home md:flex bg-slate-100 rounded-xl p-8 md:p-0">
                <div className="pt-6 md:p-8 grid text-center md:text-left space-y-4 mx-10">
                    <figcaption className="font-medium">
                        <h1 className='text-4xl'>
                            <span className=" text-pink-400 dark:text-pink-500">Beauty </span>
                             is among life's greatest treasures
                        </h1>
                    </figcaption>
                    <blockquote>
                        <p className="text-lg font-base">
                            “ From skincare innovations to cosmetic enhancements, 
                            beauty manifests in myriad forms, each representing a 
                            unique expression of self-care and empowerment.”
                        </p>
                    </blockquote>
                    
                    <Link to={`/products`}>
                        <button className='bg-blue-500 hover:bg-blue-600 py-3 px-20 rounded text-white hover:text-white'>
                            Shop Now
                        </button>
                    </Link>
                </div>
                <img src={banner} alt="" className='md:p-10 lg:w-2/3 lg:h-full mt-10 w-2/4 h-auto object-cover' />
            </div>
        </>
    );
}

export default Home;

