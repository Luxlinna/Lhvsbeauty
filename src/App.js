import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/navbar/Navbar.jsx';
import Pages from './components/pages/Pages.jsx';
import Products from './common/products/Products.jsx';
import Cart from './common/cart/Cart.jsx';
import Footer from './common/footer/Footer.jsx';
import { useState } from "react";
import Data from './components/flasdeals/Data.js';
import Shdata from './components/shopping/Shdata.js';
import ProductDetail from './common/products/ProductDetail.jsx';
import { CartProvider } from './context/CartContext.js';
import About from './components/pages/about/About.jsx';
import { Contact } from './components/pages/contact/Contact.jsx';
import User from './components/pages/user/User.jsx';

function App() {
  // Fetch data from local database
  const { productItems } = Data;
  const { shopItems } = Shdata;

  // useState hook to manage cart items
  const [cartItem, setCartItem] = useState([]);


  // function to add items to cart
  const addToCart = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItem(cartItem.map((item) => item.id === product.id ?
        { ...ProductExist, qty: ProductExist.qty + 1 } : item)
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  // function to remove items from cart
  const decreaseCart = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if (ProductExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(cartItem.map((item) => item.id === product.id ? 
        { ...ProductExist, qty: ProductExist.qty - 1 } : item ));
    }
  };

  // function to delete items from cart
  const deleteCartItem = (product) => {
    // Filter out the item to be delete
    const updatedCart = cartItem.filter((item) => item.id !== product.id);
    // Update the cart state
    setCartItem(updatedCart);
  };

  // function to clear cart
  const clearCart = () => {
    setCartItem([]);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar cartItem={cartItem} addToCart={addToCart} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path='/products' element={<Products productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path='/user' element={<User />} />
          <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseCart} deleteCartItem={deleteCartItem} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
