import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const handleLoginButtonClick2 = () => {
        navigate('/register');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const storedUser = localStorage.getItem(username);
        if (storedUser) {
            const storedPassword = JSON.parse(storedUser).password;
            if (storedPassword === password) {
                // Implement successful login behavior
                setErrorMessage('');
                navigate('/home');
            } else {
                setErrorMessage('Invalid credentials');
            }
        } else {
            setErrorMessage('User not found,Kindly register');
        }
    };

    return (
        <div>
            <div>
                <h2>Login</h2>
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
                <button onClick={handleLogin}>Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
            <div>
                <Link to="/forgotPassword"> Forgot Password? </Link>
                <button onClick={handleLoginButtonClick2}>Register</button>
            </div>
        </div>
    );
};

export default Login;
