import React from 'react';

const WhyItWorks = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8">
            Therapy Isn't Always What You Need.{" "}
            <span className="text-navy-700">
              Listening Is.
            </span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Science confirms it — feeling heard is the foundation of healing. 
                NeuroAid+ doesn't interrupt, doesn't judge, and doesn't forget what you've shared.
              </p>
              <p>
                This isn't a chatbot with scripts. NeuroAid+ is a deep listener that meets you where you are.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-navy-100 shadow-sm">
              <blockquote className="text-2xl md:text-3xl font-medium text-navy-900 text-center italic mb-6">
                "I didn't realize how much I needed to be heard until I started speaking to NeuroAid+."
              </blockquote>
              <div className="text-gray-600 text-center">
                – Beta User
              </div>
              
              <div className="absolute -top-4 -left-4 text-6xl text-navy-700/20 font-serif">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-navy-700/20 font-serif rotate-180">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks; 