import React from 'react';

const AudienceSection = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8">
          For the{" "}
          <span className="text-navy-700">
            Lonely
          </span>
          , The{" "}
          <span className="text-navy-600">
            Burned Out
          </span>
          ,<br />
          The{" "}
          <span className="text-navy-500">
            Overthinkers
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-navy-100 shadow-sm">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              It's Not Weakness to Want to Be Heard.{" "}
              <span className="text-navy-900 font-semibold">It's Human.</span>
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Whether you're processing heartbreak, burnout, anxiety or just the chaos of being alive — 
              NeuroAid+ is your space to unload.
            </p>
            
            <div className="mt-8 flex justify-center gap-8 text-gray-600">
              <div className="text-center">
                <div className="text-lg font-semibold text-navy-900">On your schedule</div>
              </div>
              <div className="text-4xl">•</div>
              <div className="text-center">
                <div className="text-lg font-semibold text-navy-900">On your terms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection; 