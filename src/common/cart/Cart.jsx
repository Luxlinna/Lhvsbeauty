import React from 'react';
import './Cart.css';
import SlideDetail from '../../components/slider/SlideDetail';

const Cart = ({ cartItem, addToCart, decreaseQty, deleteCartItem, clearCart }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    console.log('cartItem', cartItem);

    // Ensure totalPrice is a number and format it with commas
    const formattedTotalPrice = totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'SEK',
    }) ?? '0.00 SEK'; // Default to 0.00 SEK if totalPrice is NaN


    return (
        <>
            <SlideDetail />
            <section className='cart-items bg-gray-100 py-10'>
                <div className="cart container flex">
                    <div className="cart-details md:w-3/4">
                        {
                            cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>
                        }
                        {/* Cart Items */}
                        {cartItem.map((item) => {
                            const productQty = (item.price * item.qty).toLocaleString('en-US'); // Format productQty with commas
                            return (
                                <div className='cart-list flex gap-2 product' key={item.id}>
                                    <div className='img'>
                                        <img src={item.cover} alt='' />
                                    </div> 
                                    {/* Product Details */}
                                    <div className='cart-details'>
                                        <h3>{item.name}</h3>
                                        <h4>{item.price}.00  Qty: {item.qty}
                                            <span> SEK {productQty}.00</span>
                                        </h4>
                                    </div>  
                                    {/* Delete item */}
                                    <div className='cart-items-function'>
                                        <div className='removeCart pl-2'>
                                            <button className='removeCart' onClick={() => deleteCartItem(item)}>
                                                <i className='fa fa-trash' />
                                            </button>
                                        </div>
                                        {/* Quantity Control */}
                                        <div className='cartControl flex'>
                                            <button className='incCart' onClick={() => addToCart(item)}>
                                                <i className='fa fa-plus' />
                                            </button>
                                            <button className='desCart' onClick={() => decreaseQty(item)}>
                                                <i className='fa fa-minus' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Nested content with unique keys */}
                                    <div key={`${item.id}-nested1`}>
                                        {/* Nested content 1 */}
                                    </div>
                                    <div key={`${item.id}-nested2`}>
                                        {/* Nested content 2 */}
                                    </div>
                                </div>                                
                            )
                        })} 
                    </div>
                    {/* Cart Total */}
                    <div className='cart-total product'>
                        <h2>Cart Summary</h2>
                        
                        <div className='flex justify-between align-top text-5xl pt-2'>
                            <h4>Total Price :  </h4>
                            <h3 className='pb-2'> {formattedTotalPrice}</h3>
                            <button className='clearCart' onClick={clearCart}><i className='fa fa-trash' /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;

