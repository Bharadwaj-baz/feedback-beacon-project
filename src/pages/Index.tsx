import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Inbox, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-feedback-light to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Community Feedback Made <span className="text-feedback-blue">Intelligent</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered platform automatically collects, classifies, and analyzes public feedback to help organizations make data-driven decisions quickly and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-feedback-blue hover:bg-blue-600 text-white px-8 py-6 rounded-md flex items-center gap-2 mx-auto" 
                onClick={() => {
                  const chatbotButton = document.querySelector('[aria-label="Open Feedback Chat"]') as HTMLButtonElement;
                  if (chatbotButton) chatbotButton.click();
                }}
              >
                Start Collecting Feedback <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: Multi-Channel Feedback */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-feedback-light h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Inbox className="text-feedback-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Multi-Channel Intake</h3>
              <p className="text-gray-600 text-center">
                Collect feedback from websites, mobile apps, emails, and social media platforms.
              </p>
            </div>
            
            {/* Feature 2: AI Sentiment Analysis */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-feedback-light h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="text-feedback-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">AI Sentiment Analysis</h3>
              <p className="text-gray-600 text-center">
                Automatically detect emotional tone and intent behind each piece of feedback.
              </p>
            </div>
            
            {/* Feature 3: Transparency */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-feedback-light h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="text-feedback-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Explainable AI</h3>
              <p className="text-gray-600 text-center">
                Understand AI decisions with transparent, interpretable machine learning methods.
              </p>
            </div>
            
            {/* Feature 4: Immediate Action */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-feedback-light h-14 w-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ArrowRight className="text-feedback-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Instant Routing</h3>
              <p className="text-gray-600 text-center">
                Route feedback to the right team for quick response and resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-feedback-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Revolutionize Your Feedback Process?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Experience how our AI-driven platform can transform community insights into actionable intelligence!
          </p>
          <Button 
            className="bg-feedback-blue hover:bg-blue-600 text-white px-8 py-6 rounded-md flex items-center gap-2 mx-auto" 
            onClick={() => {
              const chatbotButton = document.querySelector('[aria-label="Open Feedback Chat"]') as HTMLButtonElement;
              if (chatbotButton) chatbotButton.click();
            }}
          >
            Start Collecting Feedback <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
