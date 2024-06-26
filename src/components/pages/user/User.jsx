import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './User.css';
import WaterAnimation from './WaterAnimation';

const User = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleView = () => {
        setIsLogin(!isLogin);
    };
    return (
        <div className='user'>
            <div className='water-animation'>
                <WaterAnimation />
            </div>
            <div className='container flex flex-col items-center pt-10'>
                <h1 className='font-5xl text-purple-900'>User</h1>
                {isLogin ? <Login toggleView={toggleView} /> : <Signup toggleView={toggleView} />}
            </div>
            <div className='water-animation1 flex'>
            <WaterAnimation  />
            </div>
        </div>
    );
};

export default User;
