import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed!');
    }
  };

  return (
    <div className="container mx-auto text-center mt-16 p-6 bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-xl max-w-md">
      <h2 className="text-3xl font-bold text-purple-700 tracking-wide mb-6">Join Us!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-3 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          className="w-full p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
          type="submit"
        >
          Signup!
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Already a member? <Link to="/login" className="text-purple-600 hover:underline font-medium">Dive into Login!</Link>
      </p>
    </div>
  );
}