
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

type FeedbackType = 'Complaint' | 'Suggestion' | 'Appreciation' | 'Report an Issue' | null;

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<FeedbackType>(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Bot messages for different steps
  const botMessages = [
    "👋 Hi there! I'm FeedBot, your friendly feedback assistant. How can I help you today?",
    "What type of feedback would you like to share?",
    "Great! Please share your feedback in detail:",
    "Thanks for your feedback! Would you like to share your name? (optional)",
    "Would you like to share your email for follow-ups? (optional)",
    "Thank you for your feedback! Our AI system has analyzed it and created a ticket. Someone from our team will review it shortly."
  ];

  // Initialize chat with greeting
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setTimeout(() => {
        setMessages([
          { id: 1, text: botMessages[0], isBot: true }
        ]);
        setTimeout(() => {
          setMessages(prev => [...prev, { id: 2, text: botMessages[1], isBot: true }]);
          setCurrentStep(1);
        }, 500);
      }, 300);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text: inputValue, isBot: false };
    setMessages(prev => [...prev, newUserMessage]);
    
    // Process based on current step
    if (currentStep === 2) {
      // Store feedback text
      setFeedbackText(inputValue);
      // Ask for name
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, text: botMessages[3], isBot: true }]);
        setCurrentStep(3);
      }, 600);
    } else if (currentStep === 3) {
      // Store name
      setUserName(inputValue);
      // Ask for email
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, text: botMessages[4], isBot: true }]);
        setCurrentStep(4);
      }, 600);
    } else if (currentStep === 4) {
      // Store email
      setUserEmail(inputValue);
      // Show final message
      setTimeout(() => {
        let sentiment = "neutral";
        if (feedbackText.toLowerCase().includes("love") || feedbackText.toLowerCase().includes("great") || feedbackText.toLowerCase().includes("good")) {
          sentiment = "positive";
        } else if (feedbackText.toLowerCase().includes("hate") || feedbackText.toLowerCase().includes("bad") || feedbackText.toLowerCase().includes("terrible")) {
          sentiment = "negative";
        }
        
        const analysisMessage = `Based on our analysis, your feedback has a ${sentiment} sentiment.`;
        
        let tag = "general";
        if (feedbackText.toLowerCase().includes("service")) tag = "service";
        if (feedbackText.toLowerCase().includes("website")) tag = "website";
        if (feedbackText.toLowerCase().includes("staff")) tag = "staff";
        
        const tagMessage = `We've tagged your feedback as: ${tag}`;
        
        const analysisResults = { id: messages.length + 2, text: analysisMessage + "\n\n" + tagMessage, isBot: true };
        setMessages(prev => [...prev, analysisResults]);
        
        setTimeout(() => {
          setMessages(prev => [...prev, { id: prev.length + 1, text: botMessages[5], isBot: true }]);
          setCurrentStep(5);
        }, 1000);
      }, 600);
    }
    
    // Clear input
    setInputValue('');
  };

  const handleFeedbackTypeSelection = (type: FeedbackType) => {
    setSelectedFeedbackType(type);
    setMessages(prev => [...prev, { id: prev.length + 1, text: `${type}`, isBot: false }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { id: prev.length + 1, text: botMessages[2], isBot: true }]);
      setCurrentStep(2);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setSelectedFeedbackType(null);
    setFeedbackText('');
    setUserName('');
    setUserEmail('');
  };

  return (
    <>
      {/* ChatBot Trigger Button */}
      <button
        onClick={toggleChatBot}
        className="fixed bottom-6 right-6 bg-feedback-blue text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all z-30 animate-bounce-in"
        aria-label="Open Feedback Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {/* ChatBot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-xl border border-gray-200 w-80 md:w-96 z-40 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-feedback-blue text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Community Feedback</h3>
            <button 
              onClick={resetChat}
              className="text-white text-xs hover:underline"
              aria-label="Reset Chat"
            >
              New Chat
            </button>
          </div>
          
          {/* Messages Container */}
          <div className="h-80 overflow-y-auto p-3 bg-gray-50">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div 
                  className={`inline-block rounded-lg py-2 px-3 max-w-[80%] ${
                    message.isBot 
                      ? 'bg-white shadow-sm text-gray-800' 
                      : 'bg-feedback-blue text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {/* Feedback Type Selection */}
            {currentStep === 1 && (
              <div className="space-y-2 my-3">
                {(['Complaint', 'Suggestion', 'Appreciation', 'Report an Issue'] as FeedbackType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleFeedbackTypeSelection(type)}
                    className="bg-white border border-gray-300 text-gray-700 rounded-md px-3 py-2 w-full text-left hover:bg-gray-50 transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          {currentStep < 5 && (
            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="min-h-[40px] max-h-[120px] resize-none flex-1 focus:ring-feedback-blue"
                  disabled={currentStep === 1} // Disabled during feedback type selection
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="bg-feedback-blue hover:bg-blue-600 text-white"
                  disabled={inputValue.trim() === '' || currentStep === 1}
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
