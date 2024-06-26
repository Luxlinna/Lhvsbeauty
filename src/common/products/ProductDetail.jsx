import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Shdata from '../../components/shopping/Shdata'; // Assuming Shdata contains your product data
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart, buyNow } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const product = Shdata.shopItems.find(item => item.id === parseInt(id));
        setProduct(product);

        // Check if the product is in the favorite list in local storage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(product.id));
    }, [id]);

    const handleFavoriteClick = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(product.id)) {
            favorites = favorites.filter(favId => favId !== product.id);
        } else {
            favorites.push(product.id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    const handleBuyNowClick = (e) => {
        e.preventDefault();
        buyNow(product, navigate);
    };

    const handleAddToCartClick = (e) => {
        e.preventDefault();
        addToCart(product, navigate);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details my-5 gap-5">
            <h1 className="title my-10 text-center text-2xl md:text-3xl">{product.name}</h1>
            <div className="container w-full flex flex-col md:flex-row py-10 gap-5">
                <div className="img md:w-2/4 flex-none relative mx-auto md:mx-0">
                    <img src={product.cover} alt={product.name} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {product.name}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            SEK {product.price}.00
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm">
                            {['S', 'L'].map(size => (
                                <label key={size}>
                                    <input className="sr-only peer" name="size" type="radio" value={size.toLowerCase()} />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        {size}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button 
                                className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:text-black hover:bg-white" 
                                onClick={handleBuyNowClick}
                            >
                                Back To Shop
                            </button>
                            <button 
                                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:text-white hover:bg-black" 
                                onClick={handleAddToCartClick}
                            >
                                Add to bag
                            </button>
                        </div>
                        <button
                            className={`flex-none flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 ${isFavorite ? 'text-red-500' : 'text-slate-300'}`}
                            type="button"
                            aria-label="Like"
                            onClick={handleFavoriteClick}
                        >
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-slate-900">Product Description</h2>
                        <p className="text-sm text-slate-700">{product.description}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-slate-900">Capacity</h2>
                        <p className="text-sm text-slate-700">{product.capacity}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-slate-900">Rating</h2>
                        <div className="flex items-center">
                            <span className="text-sm text-slate-700">{product.rating} / 5</span>
                            <div className="ml-2 flex">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className={`w-4 h-4 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927a1 1 0 011.902 0l1.518 4.684a1 1 0 00.95.691h4.931a1 1 0 01.61 1.794l-3.993 2.898a1 1 0 00-.364 1.118l1.518 4.684a1 1 0 01-1.541 1.118l-3.993-2.898a1 1 0 00-1.175 0l-3.993 2.898a1 1 0 01-1.541-1.118l1.518-4.684a1 1 0 00-.364-1.118L2.94 9.396a1 1 0 01.61-1.794h4.931a1 1 0 00.95-.691l1.518-4.684z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetail;


