import React, { useState } from 'react';
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Generate and send reset email with the unique token
        // Here, you would typically call an API endpoint to trigger the email sending process
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* <button onClick={handleResetPassword}>Reset Password</button> */}
            <button><Link to="/reset-password/:token"> Reset Password </Link></button>
        </div>
    );
};

export default ForgotPassword;
