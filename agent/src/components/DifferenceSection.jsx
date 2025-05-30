import React from 'react';
import { Mic, Brain, Lock } from "lucide-react";

const DifferenceSection = () => {
  const features = [
    {
      icon: <Mic className="h-12 w-12" />,
      title: "Voice-First Conversations",
      description: "Talk like you would to a friend. No typing, no appointments — just press play and speak to NeuroAid+."
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Emotional Pattern Tracking",
      description: "NeuroAid+ tracks tone, pace, and sentiment across every session. You'll know what's shifting before you even realize it."
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Private. Always.",
      description: "Your data is encrypted, anonymized, and never used for training. Your voice belongs to you with NeuroAid+."
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8">
            NeuroAid+ — An AI Listener That{" "}
            <span className="text-navy-700">
              Remembers, Reflects, and Evolves
            </span>{" "}
            With You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-navy-100 hover:bg-white/90 transition-colors duration-300 shadow-sm"
            >
              <div className="text-navy-700 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection; 