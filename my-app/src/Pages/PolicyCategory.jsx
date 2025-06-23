import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GovtPolicyCategory() {
  const navigate = useNavigate();

  const policyList = [
    { name: 'Women Policy', path: '/womenpolicy' },
    { name: 'Agri Policy' },
    { name: 'Student Policy' },
    { name: 'Employee Policy' },
    { name: 'Child Policy' },
    { name: 'Health Policy' },
    { name: 'EV Policy' },
    { name: 'Education Policy' },
    { name: 'Skill Policy' },
    { name: 'Youth Policy' },
    { name: 'Farmer Policy' },
    { name: 'Senior Citizen Policy' },
    { name: 'Startup Policy' },
    { name: 'Digital India Policy' },
    { name: 'Environment Policy' },
  ];

  return (
    <div className="container mx-auto text-center mt-8 p-4 bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-xl">
      <h4 className="text-2xl font-bold text-purple-700 tracking-wide mb-6">Govt Policy Category</h4>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {policyList.map((policy, index) => (
          <div
            key={index}
            className="p-4 bg-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => policy.path && navigate(policy.path)}
          >
            {policy.name}
          </div>
        ))}
      </div>
    </div>
  );
}
