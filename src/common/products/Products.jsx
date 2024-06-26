import React from 'react';
import NewArrivals from '../../components/newarrivals/NewArrivals';
import Shopping from '../../components/shopping/Shopping';

const Products = ({ shopItems, addToCart }) => {
    return (
        <>
            <h1 className="flex mt-20 font-bold text-5xl justify-center text-purple-900">Products List</h1>
            <NewArrivals />
            <Shopping shopItems={shopItems} addToCart={addToCart} />
        </>
    );
}

export default Products;
