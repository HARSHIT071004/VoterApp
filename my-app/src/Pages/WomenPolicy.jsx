import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WomenPolicy() {
  const navigate = useNavigate();

  const yojnas = [
    'Beti Bachao Beti Padhao',
    'Mahila E-Haat',
    'Sukanya Samriddhi Yojana',
    'Ujjwala Yojana',
    'Matru Vandana Yojana',
    'Ladli Bahna Yojana'
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl border border-purple-200">
      <h2 className="text-3xl font-bold text-purple-800 mb-1">👩‍🦰 Women Policy</h2>
      <p className="text-sm text-gray-500 mb-6 italic">महिला सशक्तिकरण योजनाएं (Mahila Shakti Yojana)</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {yojnas.map((yojna, i) => (
          <div
            key={i}
            className="bg-purple-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-purple-700 cursor-pointer transition duration-200"
            onClick={() =>
              yojna === 'Ladli Bahna Yojana' && navigate('/ladli')
            }
          >
            {yojna}
          </div>
        ))}
      </div>
    </div>
  );
}

