import React from 'react';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
    const { cart } = useCart();

    return (
        <div className="relative">
            <i className="fa fa-shopping-cart"></i>
            {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs rounded-full text-center">
                    {cart.length}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
