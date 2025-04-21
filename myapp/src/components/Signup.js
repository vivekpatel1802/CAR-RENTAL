import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import N1 from './'

const Signup = ({ theme }) => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    // useNavigate() -->the process of redirecting users to different routes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // React event handling to control the behavior of form submissions and other events
        alert(`Signup details:\n Name:${formData.name} \n Email:${formData.email}`);
        navigate("/"); // Navigate to the home page after signup
    };

    return (

        <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-dark' : 'bg-slate-100'}`}>
            <form
                onSubmit={handleSubmit}
                className={`p-6 rounded-lg shadow-md w-80 space-y-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
                <h1 className={`text-2xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Sign Up</h1>
                <div>
                    <label className={`block mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`} htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                    />
                </div>

                <div>
                    <label className={`block mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`} htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                    />
                </div>

                <div>
                    <label className={`block mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`} htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className={`w-full p-2 border rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white py-2 rounded`}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

Signup.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Signup;
