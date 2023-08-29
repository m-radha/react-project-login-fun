import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const ResetPassword = () => {

    const resetToken = 'your-generated-reset-token';
    const resetLink = `/reset-password/${resetToken}`;

    // Include this link in the reset email that you send to the user

    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordReset = async () => {
        try {
            const response = await fetch(`/api/reset-password/${token}`, {
                method: 'POST', // Use POST method for security reasons
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }), // Send the new password
            });
    
            if (response.ok) {
                // Password reset was successful
                // You might want to display a success message to the user
            } else {
                // Handle error cases
                // You might want to display an error message to the user
            }
        } catch (error) {
            // Handle network errors or other exceptions
        }
    };
    

    return (
        <div>
            <h2>Reset Password</h2>
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handlePasswordReset}>Reset</button>
        </div>
    );
};

export default ResetPassword;
