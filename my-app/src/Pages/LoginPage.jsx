import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      alert('Login successful!');
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <div className="container mx-auto text-center mt-16 p-6 bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-xl max-w-md">
      <h2 className="text-3xl font-bold text-purple-700 tracking-wide mb-6">Unlock Your Journey!</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="w-full p-3 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-3 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-full p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
          type="submit"
        >
          Dive In!
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Don’t have an account? <Link to="/" className="text-purple-600 hover:underline font-medium">Start the Adventure!</Link>
      </p>
    </div>
  );
}