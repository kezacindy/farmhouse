import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/HomePage'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center ">
          <div className="">
            
            <img src="/logo.png" alt="Logo" className="mx-auto w-20 " />
          </div>
          <h1 className="text-2xl font-bold text-green-950">The Farm House</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black">Username/Email</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-black">Password</label>
            <input 
              type={passwordVisible ? "text" : "password"} 
              className="w-full px-3 py-2 border rounded-lg" 
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="absolute inset-y-0 right-0 px-3 py-2 text-black"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
