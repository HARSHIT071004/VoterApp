import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ApplyForm() {
  const [textData, setTextData] = useState({
    name: '',
    aadhar: '',
    district: '',
    age: '',
    category: '',
    gender: '',
    mobile: '',
    email: '',
    address: '',
    skills: '',
  });

  const [files, setFiles] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(textData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Object.entries(files).forEach(([key, file]) => {
      formData.append(key, file);
    });

    try {
      await axios.post('http://localhost:5000/api/apply', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Application submitted successfully!');
      navigate('/home');
    } catch (err) {
      alert('Error submitting form');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-2xl rounded-xl max-w-md border border-purple-100">
      <h2 className="text-2xl font-bold text-purple-800 tracking-wide mb-6 text-center border-b-2 border-purple-200 pb-2">Policy Eligibility Application</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <h3 className="text-lg font-semibold text-purple-700 border-b-2 border-purple-200 pb-2">Personal Information</h3>

        <input
          name="name"
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        />

        <div className="flex gap-4">
          <input
            name="age"
            onChange={handleChange}
            required
            placeholder="Age"
            className="w-1/2 p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
          <input
            name="gender"
            onChange={handleChange}
            placeholder="Gender"
            className="w-1/2 p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
        </div>

        <div className="flex gap-4">
          <input
            name="mobile"
            onChange={handleChange}
            placeholder="Mobile"
            className="w-1/2 p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-1/2 p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
        </div>

        <input
          name="aadhar"
          onChange={handleChange}
          required
          placeholder="Aadhar Number"
          className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        />
        <input
          name="district"
          onChange={handleChange}
          required
          placeholder="District"
          className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        />

        <select
          name="category"
          required
          onChange={handleChange}
          className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        >
          <option value="">Select Category</option>
          <option value="General">General</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OBC">OBC</option>
        </select>

        <input
          name="address"
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        />

      
        <h3 className="text-lg font-semibold text-purple-700 border-b-2 border-purple-200 pb-2 mt-4">Document Uploads</h3>
        {['aadharCard', 'panCard', 'voterId', 'drivingLic'].map((doc) => (
          <div key={doc} className="flex items-center justify-between p-3 border-2 border-purple-200 rounded-lg bg-gray-50">
            <span className="text-purple-800 font-medium capitalize">{doc.replace(/([A-Z])/g, ' $1')}</span>
            <input type="file" name={doc} onChange={handleFileChange} className="text-purple-800" />
          </div>
        ))}

      
        <h3 className="text-lg font-semibold text-purple-700 border-b-2 border-purple-200 pb-2 mt-4">Education Details</h3>
        {['hscMarksheet', 'gradMarksheet', 'postGradMarksheet'].map((doc) => (
          <div key={doc} className="flex items-center justify-between p-3 border-2 border-purple-200 rounded-lg bg-gray-50">
            <span className="text-purple-800 font-medium capitalize">{doc.replace(/([A-Z])/g, ' $1')}</span>
            <input type="file" name={doc} onChange={handleFileChange} className="text-purple-800" />
          </div>
        ))}

        <input
          name="skills"
          onChange={handleChange}
          placeholder="Other Courses / Skills"
          className="w-full p-3 border-2 border-purple-200 rounded-lg bg-gray-50 text-purple-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        />

        <button
          type="submit"
          className="w-full p-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}