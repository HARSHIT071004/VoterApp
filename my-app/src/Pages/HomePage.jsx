import { useNavigate } from 'react-router-dom';
import { FaMoneyBillWave, FaFlag, FaUser, FaSms, FaUniversity, FaNewspaper } from 'react-icons/fa';
import React from 'react';

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container mx-auto text-center mt-8 p-6 bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-xl">
      <h4 className="text-2xl font-bold text-gray-800 tracking-wide">Welcome Home!</h4>

      {/* Slider Image */}
      <div className="p-6 border-2 border-purple-600 rounded-xl mt-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-lg font-semibold text-purple-600 mb-1">Dynamic Slider</p>
        <small className="text-gray-500">(Super admin can spice it up!)</small>
      </div>

     
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="p-5 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 flex flex-col items-center hover:bg-purple-100 transition-colors duration-300">
          <FaMoneyBillWave size={28} className="mb-2" />
          <div className="text-xl font-medium">Earn Cash!</div>
        </div>
        <div className="p-5 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 flex flex-col items-center hover:bg-purple-100 transition-colors duration-300">
          <FaFlag size={28} className="mb-2" />
          <div className="text-xl font-medium">Daily Boost!</div>
        </div>
        <div className="p-5 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 flex flex-col items-center hover:bg-purple-100 transition-colors duration-300">
          <FaUser size={28} className="mb-2" />
          <div className="text-xl font-medium">Mini Site!</div>
        </div>
        <div className="p-5 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 flex flex-col items-center hover:bg-purple-100 transition-colors duration-300">
          <FaSms size={28} className="mb-2" />
          <div className="text-xl font-medium">Market Buzz!</div>
        </div>
        <div
          className="p-5 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 flex flex-col items-center hover:bg-purple-100 transition-colors duration-300 cursor-pointer"
          onClick={() => navigate('/policies')}
        >
          <FaUniversity size={28} className="mb-2" />
          <div className="text-xl font-medium">Govt Policy!</div>
        </div>
        <div className="p-5 border-2 border-purple-600 rounded-xl bg-purple-50 text-purple-700 flex flex-col items-center hover:bg-purple-100 transition-colors duration-300 line-through decoration-red-500">
          <FaNewspaper size={28} className="mb-2" />
          <div className="text-xl font-medium">Pol. Updates!</div>
        </div>
      </div>

     
      <div className="flex justify-around mt-8">
        <div className="border-2 border-purple-600 rounded-xl px-6 py-3 bg-gradient-to-r from-white to-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <strong className="block text-xl font-semibold text-purple-700 tracking-wide">Time Left</strong>
          <div className="text-3xl font-extrabold text-gray-900">365</div>
        </div>
        <div className="border-2 border-purple-600 rounded-xl px-6 py-3 bg-gradient-to-r from-white to-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <strong className="block text-xl font-semibold text-purple-700 tracking-wide">Referrals Rock</strong>
          <div className="text-3xl font-extrabold text-gray-900">20</div>
        </div>
      </div>

     
      <div className="mt-10 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
