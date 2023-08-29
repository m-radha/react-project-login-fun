import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleLoginButtonClick1 = () => {
        navigate('/login');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = () => {
        const newUser = {
            username,
            password,
        };
        localStorage.setItem(username, JSON.stringify(newUser));
        setSuccessMessage('Registration successful');
    };

    return (
        <div>
            <div>
                <h2>Register</h2>
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
                <button onClick={handleRegister}>Register</button>
                {successMessage && <p>{successMessage}</p>}
            </div>
            <div>
            <button onClick={handleLoginButtonClick1}>Login</button>
            </div>
        </div>
    );
};

export default Register;
