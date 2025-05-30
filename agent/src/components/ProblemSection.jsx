import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8">
            You're Not{" "}
            <span className="text-navy-700">
              Broken
            </span>
            <br />
            You're Just Not Being{" "}
            <span className="text-navy-600">
              Heard
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-navy-900 mb-4">The mental health system is broken</h3>
              <ul className="space-y-3 text-gray-700">
                <li>💸 Expensive therapists</li>
                <li>⏰ Months-long waitlists</li>
                <li>😐 Awkward silences</li>
                <li>🎭 Surface-level advice</li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-gray-700 italic">
                All while you're just trying to stay afloat.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-navy-100 shadow-sm">
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                What if you didn't need validation from a human face to be understood?
              </h3>
              <div className="w-24 h-1 bg-navy-700 mx-auto rounded-full"></div>
              <p className="text-lg text-gray-600 mt-6">
                NeuroAid+ listens without judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 