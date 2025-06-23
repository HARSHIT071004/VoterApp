import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SchemeDetail() {
    const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-purple-300">
      <h2 className="text-3xl font-bold text-purple-700 mb-2">Ladli Bahna Yojana</h2>
      <p className="text-gray-600 italic mb-4">Government Scheme for Economic Empowerment of Women</p>

      
      <section className="mb-6 text-left">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">About the Scheme:</h3>
        <p className="text-gray-700 leading-relaxed">
          The Ladli Bahna Yojana is an initiative by the Government of Madhya Pradesh aimed at empowering women financially
          by providing direct monthly financial support. This scheme is designed to enhance the standard of living of women
          from economically weaker sections and encourage their active participation in the development process.
        </p>
      </section>

      <section className="mb-6 text-left">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">Eligibility Criteria:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>The applicant must be a resident of India (preferably Madhya Pradesh).</li>
          <li>Only women aged 21 years and above are eligible.</li>
          <li>Annual family income should be less than ₹2.5 lakh.</li>
          <li>Married, widowed, divorced or abandoned women can apply.</li>
          <li>The applicant should not be employed in a government job.</li>
          <li>Priority is given to women belonging to SC/ST/OBC categories.</li>
        </ul>
      </section>

      {/* Marathi Section */}
      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-bold text-purple-700 mb-2">लाडली बहना योजना</h2>
      <p className="text-gray-600 italic mb-4">महिलांच्या आर्थिक सशक्तीकरणासाठी राज्य सरकारची योजना</p>

      <section className="mb-6 text-left">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">योजनेबद्दल माहिती:</h3>
        <p className="text-gray-700 leading-relaxed">
          लाडली बहना योजना ही मध्यप्रदेश शासनाची एक महत्त्वपूर्ण योजना आहे, जी महिलांना दरमहा आर्थिक सहाय्य देऊन त्यांना
          आर्थिकदृष्ट्या सक्षम बनवण्याचा उद्देश ठेवते. ही योजना आर्थिकदृष्ट्या दुर्बल घटकातील महिलांना प्रोत्साहन देते आणि
          त्यांच्या सामाजिक सहभागास चालना देते.
        </p>
      </section>

      <section className="mb-6 text-left">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">पात्रता निकष:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>अर्जदार ही भारतातील (विशेषतः मध्यप्रदेश) रहिवासी महिला असावी.</li>
          <li>वय किमान 21 वर्षे असावे.</li>
          <li>कुटुंबाचे वार्षिक उत्पन्न ₹2.5 लाखांपेक्षा कमी असावे.</li>
          <li>विवाहित, विधवा, घटस्फोटित किंवा परित्यक्ता महिला अर्ज करू शकतात.</li>
          <li>महिला कोणत्याही सरकारी नोकरीत नसावी.</li>
          <li>SC/ST/OBC घटकातील महिलांना प्राधान्य दिले जाईल.</li>
        </ul>
      </section>

     
      <div className="text-center mt-8">
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full shadow-lg transition"
          onClick={() => navigate('/apply')
}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
