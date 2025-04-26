
import React from 'react';
import { FeedbackForm } from '@/components/FeedbackForm';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-feedback-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Have questions about our Community Feedback Collector? 
            Get in touch with our team.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-feedback-light rounded-full p-3">
                    <Mail className="h-6 w-6 text-feedback-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">info@feedbackcollector.edu</p>
                    <p className="text-gray-600">support@feedbackcollector.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-feedback-light rounded-full p-3">
                    <Phone className="h-6 w-6 text-feedback-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600 mt-1">(123) 456-7890</p>
                    <p className="text-gray-600">(987) 654-3210</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-2">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 University Avenue<br />
                  Student Innovation Center<br />
                  Tech City, TX 75001
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <FeedbackForm />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How does the AI analyze feedback?
              </h3>
              <p className="text-gray-600">
                Our AI uses Natural Language Processing to understand the content of feedback messages. 
                It identifies key topics, sentiment (positive/negative/neutral), and urgency levels to 
                help categorize and prioritize feedback appropriately.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Is my feedback data secure?
              </h3>
              <p className="text-gray-600">
                Yes! We take data security seriously. All feedback submissions are encrypted and 
                stored securely. We do not share individual feedback data with third parties 
                without explicit permission.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can I integrate this with our existing systems?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our system is designed with integration in mind. We offer APIs that 
                allow you to connect our feedback collection and analysis tools with your existing 
                CRM, project management, or customer service systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
