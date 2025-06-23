import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import React from 'react';
import PolicyCategory from './Pages/PolicyCategory';
import Womenpolicy from './Pages/WomenPolicy';
import SchemeDetail from './Pages/SchemeDetail';
import ApplyForm from './Pages/ApplyForm';
import SignupPage from './Pages/SignupPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/>} />
         <Route path="/policies" element={<PolicyCategory />} /> 
        <Route path="/womenpolicy" element={<Womenpolicy />} />
        <Route path="/ladli" element={<SchemeDetail />} /> 
      <Route path="/apply" element={<ApplyForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;