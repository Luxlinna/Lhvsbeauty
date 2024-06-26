import React from 'react';
import logo from '../../logo.svg'; 
import './Footer.css';
import { Facebook, Instagram, GitHub, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-800 text-gray-300 py-12 buttom-0 w-full'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gab-8'>
                    {/* Column 1 */}
                    <div>
                        <img src={logo} alt='' className='mb-4'/>
                        <p className='text-sm opacity-50 pb-4'>With a commitment to excellence and customer satisfaction, 
                            we strive to empower individuals to feel confident and radiant in their skin. 
                            Explore our collection and embark on a journey to healthier, glowing skin with us.
                        </p>
                        <ul className='space-1 flex space-x-3'>
                            <li>
                                <Facebook className='text-blue-500' /><a href='https://www.facebook.com/' aria-label="Facebook"></a>
                            </li>
                            <li>
                                <Instagram className="text-purple-500" /><a href='https://www.instagram.com/' aria-label="Instagram"></a>
                            </li>
                            <li>
                                <GitHub className="text-gray-500" /><a href='https://github.com/' aria-label="GitHub"></a>
                            </li>
                            <li>
                                <Twitter className="text-blue-400" /><a href='https://twitter.com/' aria-label="Twitter"></a>
                            </li>
                            <li>
                                <YouTube className="text-red-500" /><a href='https://www.youtube.com' aria-label="YouTube"></a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className='text-lg font-bold mb-4'>About Us</h3>
                        <ul className='space-y-2 text-sm opacity-50'>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className='text-lg font-bold mb-4'>Customer Care</h3>
                        <ul className='space-y-2 text-sm opacity-50'>
                            <li>Help Center </li>
                            <li>How to Buy </li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing </li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
                        <ul className='space-y-2 text-sm opacity-50'>
                            <li>Fassanvägen 5, Perstorp, Skåne 284 36, Sweden </li>
                            <li>Email: lhvsbeauty@gmail.com</li>
                            <li>Phone: +46 70 738 33 61</li> 
                        </ul>                        
                    </div>
                </div>
                <div className='container mx-auto mt-8 opacity-50'>
                    <h3 className='text-lg font-bold my-2'>Our Mission</h3>
                    <p className='text-sm'>With a diverse array of top-notch products, we cultivate an environment where self-expression thrives, empowering individuals to embrace their distinct beauty. Our mission is to ensure that everyone feels confident and beautiful each day.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
