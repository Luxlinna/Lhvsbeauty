import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Signup = ({ toggleView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/signup', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container flex items-center justify-center h-screen'>
            <div className='form p-6 bg-white rounded shadow-md'>
                <h2 className='mb-4 text-2xl'>Sign Up</h2>
                <form className='space-y-4'>
                    <TextField
                        label="Email"
                        type="email"
                        variant='outlined'
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant='outlined'
                        type='password'
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={handleSignup}
                    >
                        Singup
                    </Button>
                </form>
                <p className='mt-4 text-center'>
                    <span className='text-black-500 pr-2 underline'>Already have an account? </span>
                    <span onClick={toggleView} className="cursor-pointer text-white hover:text-white">Login</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
