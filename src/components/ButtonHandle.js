import React from 'react';
import { useNavigate } from "react-router-dom";

const ButtonHandle = () => {
    const navigate = useNavigate();

    const handleLoginButtonClick1 = () => {
        navigate('/login');
    };
    const handleLoginButtonClick2 = () => {
        navigate('/register');
    };

    return (
        <div>
            <button onClick={handleLoginButtonClick1}>Login</button>
            <button onClick={handleLoginButtonClick2}>Register</button>
        </div>
    )
}

export default ButtonHandle;
