import React, { useState } from 'react';
import './Style.css';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // LogIn credentials
        const userName = 'sesi';
        const password = 'Sesi@123';

        if (username === userName && password === password) {
            onLogin(true);
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className='error'>{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
