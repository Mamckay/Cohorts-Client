import React from 'react';
import './css/landing.css';

export default function Landing(props) {
    return <div className='landing-container'>
        <button className='landing-button' onClick={() => props.history.push('/login')}>Login</button>
        <button className='landing-button' onClick={() => props.history.push('/register')}>Register</button>
    </div>
}