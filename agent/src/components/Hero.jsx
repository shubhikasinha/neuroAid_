import React from 'react';
import { Mic } from 'lucide-react';
import Button from './ui/button';

const Hero = ({ onStartSession }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-navy-900 text-sm border border-navy-100 shadow-sm">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span className="font-semibold">NeuroAid+</span>
          <span className="text-gray-600">AI Voice Therapy - Now Available</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-navy-900 mb-6 leading-tight">
          You Don't Need a{" "}
          <span className="text-navy-600">
            Therapist
          </span>
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">
          You Need to Be{" "}
          <span className="text-navy-700">
            Heard
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Talk to NeuroAid+ — an AI voice assistant that listens without judgment, tracks your emotional patterns, 
          and helps you make sense of your inner world — anytime, anywhere.
        </p>
        
        <div className="flex justify-center items-center">
          <Button 
            size="lg" 
            className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-6 text-lg transition-colors duration-300 shadow-lg"
            onClick={onStartSession}
          >
            <Mic className="mr-2 h-5 w-5" />
            Start Talking with NeuroAid+ – It's Free
          </Button>
        </div>
        
        <div className="mt-16 relative">
          <div className="w-32 h-32 mx-auto bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-navy-100 shadow-lg">
            <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center">
              <Mic className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 