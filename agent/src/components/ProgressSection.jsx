import React from 'react';

const ProgressSection = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8">
            See Your{" "}
            <span className="text-navy-700">
              Emotional Growth
            </span>
            <br />
            Session by Session with NeuroAid+
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Every conversation with NeuroAid+ is analyzed for emotional depth, clarity, and progress.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              NeuroAid+ visualizes your journey — where you're stuck, what you've resolved, and where you're heading.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-navy-100 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Your Emotional Journey</h3>
                
                <div className="bg-white rounded-2xl p-6 border border-navy-100">
                  <div className="flex justify-between items-end h-32 mb-4">
                    <div className="w-8 bg-navy-900 rounded-t h-16"></div>
                    <div className="w-8 bg-navy-800 rounded-t h-20"></div>
                    <div className="w-8 bg-navy-700 rounded-t h-24"></div>
                    <div className="w-8 bg-navy-600 rounded-t h-28"></div>
                    <div className="w-8 bg-navy-500 rounded-t h-32"></div>
                  </div>
                  <div className="text-gray-600 text-sm text-center">Emotional Clarity Over Time</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-navy-100">
                    <span className="text-gray-600 text-sm">Key Theme:</span>
                    <span className="text-navy-900 ml-2">Work-life balance</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-navy-100">
                    <span className="text-gray-600 text-sm">Progress:</span>
                    <span className="text-navy-900 ml-2">Increased self-awareness</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-navy-100">
                    <span className="text-gray-600 text-sm">Next Focus:</span>
                    <span className="text-navy-900 ml-2">Setting boundaries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection; 