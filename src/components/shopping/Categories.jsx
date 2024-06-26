import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';


const Categories = () => {

    // Create the categories by brand
    const data = [
        {
            cateImg: require("../../images/categories/cat-1.png"),
            cateName: "COSRX",
        },
        {
            cateImg: require("../../images/categories/cat-2.png"),
            cateName: "Beauty of Josen",
        },
        {
            cateImg: require("../../images/categories/cat-3.png"),
            cateName: "LACAMO",
        },
        {
            cateImg: require("../../images/categories/cat-4.png"),
            cateName: "Morea",
        },
        {
            cateImg: require("../../images/categories/cat-5.png"),
            cateName: "Saifa",
        },
        {
            cateImg: require("../../images/categories/cat-6.png"),
            cateName: "Nature",
        },  
    ];

    return (
        <>
            <div className='category'>
                <div className='catehead flex flex-col sm:flex-row'>
                    <h1 className='mb-2 sm:mb-0'>Brands</h1> {/* Todo, make it filter to each brands and create new page for only that brands */}
                </div>
                {data.map((value, index) => {
                    return (
                        <div className='box flex flex-col sm:flex-row' key={index}>
                            <img src={value.cateImg} alt="" className='mb-2 sm:mb-0 sm:mr-4' />
                            <span>{value.cateName}</span>
                        </div>
                    );
                })}
                <div className='box box2'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold align-middle pt-1 rounded w-full'>
                        <Link to="/products">
                            <span>View All Brands</span>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Categories;
