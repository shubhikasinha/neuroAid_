import React from 'react';
import { Mic } from 'lucide-react';
import Button from './ui/button';

const FinalCTA = ({ onStartSession }) => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-12">
          Start Your First Conversation{" "}
          <span className="text-navy-700">
            with NeuroAid+ in 30 Seconds
          </span>
        </h2>
        
        <div className="mb-8">
          <Button 
            size="lg" 
            className="bg-navy-900 hover:bg-navy-800 text-white px-12 py-8 text-xl transition-colors duration-300 shadow-lg"
            onClick={onStartSession}
          >
            <Mic className="mr-3 h-6 w-6" />
            Talk with NeuroAid+ Now – It's Free
          </Button>
        </div>
        
        <p className="text-gray-600">
          No awkward onboarding. Just press play.
        </p>
        
        <div className="mt-16">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-3 h-3 bg-navy-900 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-navy-800 rounded-full animate-pulse delay-200"></div>
            <div className="w-3 h-3 bg-navy-700 rounded-full animate-pulse delay-400"></div>
          </div>
          <p className="text-gray-600 mt-4 text-sm">NeuroAid+ is ready when you are</p>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-navy-200 text-center">
        <div className="text-gray-500 text-sm">
          NeuroAid+ • AI Voice Therapy • Always Listening
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 