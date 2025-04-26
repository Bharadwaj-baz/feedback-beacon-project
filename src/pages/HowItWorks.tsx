
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-feedback-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            How Our Feedback System Works
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            A simple explanation of the technology behind our Community Feedback Collector
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-feedback-blue bg-opacity-10 rounded-full p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-feedback-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Multi-Channel Feedback Collection</h2>
                <p className="text-gray-600">
                  Our system collects feedback from multiple channels including our website, mobile app, email, and social media platforms. This ensures we capture all community input, regardless of where it's shared.
                </p>
              </div>
            </div>
            {/* Connector line */}
            <div className="hidden md:block absolute left-[16.7%] top-[100%] w-0.5 h-8 bg-gray-300"></div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-feedback-blue bg-opacity-10 rounded-full p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-feedback-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">2. AI-Based Analysis</h2>
                <p className="text-gray-600">
                  Using Natural Language Processing (NLP), our system analyzes the text to determine sentiment (positive, neutral, negative) and categorizes the feedback by topic. This automation allows for quick processing of large volumes of feedback.
                </p>
              </div>
            </div>
            {/* Connector line */}
            <div className="hidden md:block absolute left-[16.7%] top-[100%] w-0.5 h-8 bg-gray-300"></div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-feedback-blue bg-opacity-10 rounded-full p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-feedback-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Real-Time Dashboards</h2>
                <p className="text-gray-600">
                  Administrators can view real-time data on feedback trends, sentiment analysis, and popular topics. This provides immediate insights into community perspectives and helps identify areas needing attention.
                </p>
              </div>
            </div>
            {/* Connector line */}
            <div className="hidden md:block absolute left-[16.7%] top-[100%] w-0.5 h-8 bg-gray-300"></div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-feedback-blue bg-opacity-10 rounded-full p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-feedback-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Transparency with Explainable AI</h2>
                <p className="text-gray-600">
                  Our system doesn't just make decisions - it explains them. Using methods like LIME or SHAP, administrators can understand why certain feedback was classified in specific ways, ensuring transparency and building trust in the AI's decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  JavaScript (React)
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsive Design
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Node.js
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Express.js
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Firebase (optional)
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">AI & NLP</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pre-built NLP Models
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sentiment Analysis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-feedback-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Text Classification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
