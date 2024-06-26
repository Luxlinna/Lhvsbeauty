import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ cartItem }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }, [cartItem]);

    return (
        <div className='navbar bg-gray-800 text-white sticky top-0 z-10 w-screen p-4'>
            <div className='max-w-7xl mx-auto flex justify-between items-center cart'>
                <img src={logo} alt="Logo" className='py-1' />
                <div>
                    <div className="md:hidden">
                        <Button id='hamburger-button' variant="text" className='text-3xl' onClick={toggleMenu}>
                            <MenuIcon className='text-white text-8xl' />
                        </Button>
                    </div>
                    
                    <nav className={`md:block space-x-8 text-xl ${isMenuOpen ? '' : 'hidden'}`} aria-label='main'>
                        <Link to="/" className={`text-white hover:opacity-90 ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/products" className={`text-white hover:opacity-90 ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
                        {/* <Link to="/productdetail" className={`text-white hover:opacity-90 ${location.pathname === '/productdetail' ? 'active' : ''}`}>Product Details</Link> */}
                        <Link to="/about" className={`text-white hover:opacity-90 ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <Link to="/contact" className={`text-white hover:opacity-90 ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                        <Link to='/user' className='text-white hover:opacity-90'>
                            <i className='fas fa-user-circle text-2xl'></i>
                        </Link>
                        <Link to='/cart' className='text-white hover:opacity-90'>
                            <i className='fas fa-shopping-bag text-2xl'></i>
                            <span>{cartItem ? cartItem.length : ""}</span>
                        </Link>
                    </nav>
                </div>
            
                <div id='mobile-menu' className={`absolute top-0 bg-gray-800 w-full text-2xl flex-col justify-center origin-top animate-open-menu ${isMenuOpen ? '' : 'hidden'}`}>
                    <Button onClick={toggleMenu} className='text-8xl self-end px-6'>
                        <CloseIcon className='text-white text-8xl' />
                    </Button>
                    <nav className='flex flex-col min-h-screen items-center py-8' aria-label='mobile'>
                        <Link to="/" onClick={toggleMenu} className={`w-full text-start text-white pl-5 py-6 hover:opacity-90 ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/products" onClick={toggleMenu} className={`w-full text-start text-white pl-5 py-6 hover:opacity-90 ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
                        {/* <Link to="/productdetail" onClick={toggleMenu} className={`w-full text-start text-white pl-5 py-6 hover:opacity-90 ${location.pathname === '/productdetail' ? 'active' : ''}`}>Product Details</Link> */}
                        <Link to="/about" onClick={toggleMenu} className={`w-full text-start text-white pl-5 py-6 hover:opacity-90 ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <Link to="/contact" onClick={toggleMenu} className={`w-full text-start text-white pl-5 py-6 hover:opacity-90 ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                        <Link to='/user' onClick={toggleMenu} className='w-full text-start text-white pl-5 py-6 hover:opacity-90'>
                            <i className='fas fa-user-circle text-2xl text-white'></i>
                        </Link>
                        <Link to='/cart' onClick={toggleMenu} className='w-full text-start text-white pl-5 py-5 hover:opacity-90'>
                            <i className='fas fa-shopping-bag text-2xl'></i>
                            <span className='flex ml-20'>{cartItem ? cartItem.length : ""}</span>
                        </Link>
                    </nav>
                </div>

            </div>
        </div>
    );
}

export default Navbar;

