import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, navigate) => {
        setCart((prevCart) => [...prevCart, product]);
        navigate('/cart');
    };

    const buyNow = (product, navigate) => {
        setCart([product]);
        navigate('/products');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, buyNow }}>
            {children}
        </CartContext.Provider>
    );
};


