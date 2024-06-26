import React from 'react';
import Home from '../../common/mainpages/Home';
import FlashDeal from '../flasdeals/FlashDeal';
import Feature from '../feature/Feature';
import TopCate from '../topCategories/TopCate';
import Discount from '../discount/Discount';


const Pages = ({ productItems, addToCart }) => {
    return (
        <>
            <Home />            
            <FlashDeal productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <Discount />
            <Feature />
        </>
    );
}

export default Pages;
