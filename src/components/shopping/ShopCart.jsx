// import React, { useState, useEffect } from 'react';
// import Shdata from './Shdata';
// import { useNavigate } from 'react-router-dom';

// const ShopCart = ({ addToCart }) => {
//     const [shopItems, setShopItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch shop items when the component mounts
//         setShopItems(Shdata.shopItems.map(item => ({ ...item, count: item.count || 0 })));
//     }, []);

//     // Function to increment product count
//     const increment = (id) => {
//         setShopItems(prevItems => {
//             const updatedItems = prevItems.map(item => 
//                 item.id === id ? { ...item, count: item.count + 1 } : item
//             );
//             return updatedItems;
//         });
//     };

//     const handleClick = (shopItem) => {
//         navigate(`/ProductDetail/${shopItem.id}`);
//     };

//     if (!shopItems.length) {
//         return <div>Loading...</div>; 
//     }

//     return (
//         <>
//             {shopItems.map((shopItem) => {  
//                 return (
//                     <div className='box' key={shopItem.id}>
//                         <div className='product mtop mt-4 sm:mt-0'>
//                             <div className='img relative'>
//                                 <span className='discounts top-0 bg-red-500 text-white px-2 rounded-lg'>
//                                     {shopItem.discount}% Off
//                                 </span>
//                                 <img 
//                                     src={shopItem.cover} 
//                                     alt={shopItem.name} 
//                                     onClick={() => handleClick(shopItem)} 
//                                     className='hover:cursor-pointer' 
//                                 />
//                                 <div className='product-like'>
//                                     <label>
//                                         {shopItem.count}
//                                     </label><br />
//                                     <i className='fa fa-heart cursor-pointer' onClick={() => increment(shopItem.id)}></i>
//                                 </div>
//                             </div>
//                             <div className='product-details ml-2 sm:ml-0'>
//                                 <h3 className='text-lg font-semibold'>{shopItem.name}</h3>
//                                 <div className='rate mt-1'>
//                                     {[...Array(5)].map((_, i) => (
//                                         <i key={i} className='fa fa-star mr-1'></i>
//                                     ))}
//                                 </div>
//                                 <div className='price mt-1 flex items-center'>
//                                     <h4 className='text-xl'>
//                                         {shopItem.price}.00 SEK
//                                     </h4>
//                                     <button onClick={() => addToCart(shopItem)} className="ml-2">
//                                         <i className='fa fa-shopping-cart'></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </>
//     );
// }

// export default ShopCart;



import React, { useState, useEffect } from 'react';
import Shdata from './Shdata';
import { useNavigate } from 'react-router-dom';

const ShopCart = ({ addToCart }) => {
    const [shopItems, setShopItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch shop items when the component mounts
        setShopItems(Shdata.shopItems.map(item => ({ ...item, count: item.count || 0 })));
    }, []);

    // Function to increment product count
    const increment = (id) => {
        setShopItems(prevItems => {
            const updatedItems = prevItems.map(item => 
                item.id === id ? { ...item, count: item.count + 1 } : item
            );
            return updatedItems;
        });
    };

    const handleClick = (shopItem) => {
        navigate(`/ProductDetail/${shopItem.id}`);
    };

    if (!shopItems.length) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            {shopItems.map((shopItem) => {  
                return (
                    <div className='box' key={shopItem.id}>
                        <div className='product mtop mt-4 sm:mt-0'>
                            <div className='img relative'>
                                <span className='discounts top-0 bg-red-500 text-white px-2 rounded-lg'>
                                    {shopItem.discount}% Off
                                </span>
                                <img 
                                    src={shopItem.cover} 
                                    alt={shopItem.name} 
                                    onClick={() => handleClick(shopItem)} 
                                    className='hover:cursor-pointer' 
                                />
                                <div className='product-like'>
                                    <label>
                                        {shopItem.count}
                                    </label><br />
                                    <i className='fa fa-heart cursor-pointer' onClick={() => increment(shopItem.id)}></i>
                                </div>
                            </div>
                            <div className='product-details ml-2 sm:ml-0'>
                                <h3 className='text-lg font-semibold'>{shopItem.name}</h3>
                                <div className='rate mt-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className='fa fa-star mr-1'></i>
                                    ))}
                                </div>
                                <div className='price mt-1 flex items-center'>
                                    <h4 className='text-xl'>
                                        {shopItem.price}.00 SEK
                                    </h4>
                                    <button onClick={() => addToCart(shopItem)} className="ml-2">
                                        <i className='fa fa-shopping-cart'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ShopCart;





