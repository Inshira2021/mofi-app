// Components/AuthModal.jsx

import React, { useState } from 'react';
import { FiX, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const AuthModal = ({ onClose, onLoginSuccess }) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    
    // Minimal state for demonstration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, this is where you call your backend API.
        if (email && password) {
            console.log(isSignIn ? 'Logging In...' : 'Signing Up...');
            // Simulate successful login/signup after a short delay
            setTimeout(onLoginSuccess, 500); 
        }
    };

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    const formTitle = isSignIn ? 'Sign In to MOFI' : 'Create Your Account';
    const submitButtonText = isSignIn ? 'Log In' : 'Sign Up';

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity"
            onClick={onClose} 
        >
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-sm md:max-w-md transform scale-100 ring-4 ring-red-600/10 transition-transform"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-end">
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-red-500 transition"
                        title="Close"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <h2 className="text-3xl font-extrabold text-white text-center mb-6">{formTitle}</h2>

                {/* Toggle Tabs */}
                <div className="flex bg-gray-700 p-1 rounded-full mb-6">
                    <button
                        onClick={() => setIsSignIn(true)}
                        className={`flex-1 py-2 rounded-full font-semibold transition duration-200 ${
                            isSignIn ? 'bg-red-600 text-white shadow-lg' : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignIn(false)}
                        className={`flex-1 py-2 rounded-full font-semibold transition duration-200 ${
                            !isSignIn ? 'bg-red-600 text-white shadow-lg' : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        Sign Up
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-gray-700 text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-gray-700 text-white py-3 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                        />
                        <button 
                            type="button" 
                            onClick={togglePasswordVisibility} 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                            {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                        </button>
                    </div>

                    {isSignIn && (
                        <div className="text-right">
                            <a href="#" className="text-sm text-red-400 hover:text-red-300 transition">Forgot Password?</a>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-600/50 transition duration-200"
                    >
                        {submitButtonText}
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-gray-700" />
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-700" />
                </div>

                {/* Social Logins */}
                <button className="w-full flex items-center justify-center bg-gray-700 border border-gray-600 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg mb-3 transition">
                    <img src="/icons/google.svg" alt="Google" className="w-5 h-5 mr-3" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default AuthModal;