import React, { useEffect, useRef, useState } from 'react'; 
import { PhoneCall, Brain, PhoneOff, Clock, Heart, Lightbulb, TrendingUp, ArrowLeft } from 'lucide-react';
import Vapi from "@vapi-ai/web";
import Hero from './components/Hero';
import DifferenceSection from './components/DifferenceSection';
import AudienceSection from './components/AudienceSection';
import ProblemSection from './components/ProblemSection';
import ProgressSection from './components/ProgressSection';
import WhyItWorks from './components/WhyItWorks';
import FinalCTA from './components/FinalCTA';

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

const App = () => {
  const vapiRef = useRef(null);
  const [callStatus, setCallStatus] = useState("not-started");
  const [errorMsg, setErrorMsg] = useState("");
  const [showTherapy, setShowTherapy] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sessionStartTime, setSessionStartTime] = useState(null);

  // Format time in minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Update elapsed time every second during active session
  useEffect(() => {
    let interval;
    if (callStatus === "in-progress" && sessionStartTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - sessionStartTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus, sessionStartTime]);

  useEffect(() => {
    if (callStatus === "starting") {
      if (!vapiRef.current) {
        vapiRef.current = new Vapi(PUBLIC_KEY);

        const onCallStart = () => {
          console.log("Call started");
          setCallStatus("in-progress");
          setSessionStartTime(Date.now());
        };
        const onCallEnd = () => {
          console.log("Call ended");
          setCallStatus("ended");
        };
        const onError = (error) => {
          console.error("Vapi error:", error);
          setErrorMsg(error?.errorMsg || "Unknown error");
          setCallStatus("error");
        };

        vapiRef.current.on("call-start", onCallStart);
        vapiRef.current.on("call-end", onCallEnd);
        vapiRef.current.on("error", onError);

        vapiRef.current.start(ASSISTANT_ID).catch((err) => {
          console.error("Start failed:", err);
          setErrorMsg("Failed to start session");
          setCallStatus("error");
        });
      }
    }

    return () => {
      // Do not stop the call on component unmount
    };
  }, [callStatus]);

  const handleStartCall = () => {
    setErrorMsg("");
    setCallStatus("starting");
  };

  const handleEndCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
      vapiRef.current = null;
    }
    setCallStatus("ended");
  };

  const resetSession = () => {
    setCallStatus("not-started");
    setErrorMsg("");
  };

  const startTherapySession = () => {
    setShowTherapy(true);
  };

  // Add test function to simulate session end
  const testSessionSummary = () => {
    setCallStatus("ended");
    setElapsedTime(300); // Simulate 5 minutes session
  };

  // Session Summary Component
  const SessionSummary = () => {
    // Mock data - in a real app, this would come from the AI analysis
    const emotions = ["Calm", "Worried", "Reassured"];
    const keyTopics = ["Work stress", "Sleep patterns", "Work-life balance"];
    const copingTechniques = ["Deep breathing", "Mindful walking", "Journaling"];
    const insights = [
      "You showed strong resilience in handling work pressure",
      "Sleep quality has improved over the past week",
      "Consider setting clearer boundaries between work and personal time"
    ];

    return (
      <div className="mt-8 w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-mauve-200 font-['Inter']">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-mauve-900 tracking-tight">Session Summary</h3>
          <div className="flex items-center text-mauve-700">
            <Clock className="w-5 h-5 mr-2" />
            <span>{formatTime(elapsedTime)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Emotional Journey */}
          <div className="bg-gradient-to-br from-mauve-50 to-mauve-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-mauve-900 flex items-center tracking-tight">
              <Heart className="w-5 h-5 mr-2 text-mauve-600" />
              Emotional Journey
            </h4>
            <div className="space-y-2">
              {emotions.map((emotion, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-mauve-500 rounded-full mr-2"></div>
                  <span className="text-mauve-700">{emotion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics */}
          <div className="bg-gradient-to-br from-mauve-50 to-mauve-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-mauve-900 flex items-center tracking-tight">
              <Lightbulb className="w-5 h-5 mr-2 text-mauve-600" />
              Key Topics
            </h4>
            <div className="space-y-2">
              {keyTopics.map((topic, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-mauve-500 rounded-full mr-2"></div>
                  <span className="text-mauve-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coping Techniques */}
          <div className="bg-gradient-to-br from-mauve-50 to-mauve-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-mauve-900 flex items-center tracking-tight">
              <TrendingUp className="w-5 h-5 mr-2 text-mauve-600" />
              Suggested Techniques
            </h4>
            <div className="space-y-2">
              {copingTechniques.map((technique, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-mauve-500 rounded-full mr-2"></div>
                  <span className="text-mauve-700">{technique}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-br from-mauve-50 to-mauve-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-mauve-900 flex items-center tracking-tight">
              <Brain className="w-5 h-5 mr-2 text-mauve-600" />
              Key Insights
            </h4>
            <div className="space-y-2">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-mauve-500 rounded-full mr-2"></div>
                  <span className="text-mauve-700">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={resetSession}
            className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-200 hover:scale-105"
          >
            Start New Session
          </button>
          <button
            onClick={() => setShowTherapy(false)}
            className="bg-white border border-mauve-200 hover:bg-mauve-50 text-mauve-700 px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-200 hover:scale-105 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={showTherapy && callStatus !== "ended" ? "min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 flex flex-col items-center justify-center p-4 font-['Inter'] animate-gradient" : "min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-mauve-50"}>
      {/* Landing Page */}
      {!showTherapy && (
        <>
          <Hero onStartSession={startTherapySession} />
          <DifferenceSection />
          <AudienceSection />
          <ProblemSection />
          <ProgressSection />
          <WhyItWorks />
          <FinalCTA onStartSession={startTherapySession} />
        </>
      )}

      {/* Therapy Session Page */}
      {showTherapy && callStatus !== "ended" && (
        <>
          <div className="text-center mb-8 max-w-2xl animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
              NeuroAid+
            </h1>
            <p className="text-lg text-slate-300/90 mb-3">
              {callStatus === "starting" ? "Connecting..." : 
               callStatus === "in-progress" ? "Session in progress" :
               callStatus === "error" ? "Connection failed" :
               ""}
            </p>
            <p className="text-slate-400/70 text-lg animate-pulse">
              Take a deep breath and begin when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl w-full animate-fade-in-up">
            {/* AI Therapist Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[320px] aspect-[4/3] border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] mb-4 flex items-center justify-center shadow-lg relative overflow-hidden">
                {/* Brain graphic for AI */}
                <div className="relative">
                  <Brain size={64} className="text-slate-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1 left-8 w-2 h-2 bg-slate-600 rounded-full animate-pulse delay-700"></div>
                </div>
                {/* Neural network lines */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 128 128">
                    <line x1="20" y1="30" x2="108" y2="98" stroke="white" strokeWidth="1" className="animate-pulse" />
                    <line x1="30" y1="100" x2="98" y2="28" stroke="white" strokeWidth="1" className="animate-pulse delay-500" />
                    <circle cx="20" cy="30" r="2" fill="white" className="animate-pulse" />
                    <circle cx="108" cy="98" r="2" fill="white" className="animate-pulse delay-300" />
                    <circle cx="30" cy="100" r="2" fill="white" className="animate-pulse delay-500" />
                    <circle cx="98" cy="28" r="2" fill="white" className="animate-pulse delay-700" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black-200 mb-2">Dr. Neural</h3>
              <div className={`w-3 h-3 rounded-full ${
                callStatus === "in-progress" ? "bg-slate-400 animate-pulse" : 
                callStatus === "starting" ? "bg-slate-500 animate-pulse" : 
                "bg-slate-600/50"
              }`}></div>
            </div>

            {/* User Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[320px] aspect-[4/3] border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] mb-4 flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-[2rem] flex items-center justify-center">
                    <span className="text-slate-300 font-bold text-3xl">U</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black-200 mb-2">You</h3>
              <div className={`w-3 h-3 rounded-full ${
                callStatus === "in-progress" ? "bg-slate-400 animate-pulse" : 
                callStatus === "starting" ? "bg-slate-500 animate-pulse" : 
                "bg-slate-600/50"
              }`}></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center space-y-4 animate-fade-in-up delay-200">
            {callStatus === "not-started" && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleStartCall}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-slate-500/25"
                >
                  <PhoneCall size={24} />
                  <span>Start Session</span>
                </button>
               
              </div>
            )}

            {callStatus === "starting" && (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-400"></div>
                <p className="text-slate-400/70">Establishing secure connection...</p>
              </div>
            )}

            {callStatus === "in-progress" && (
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-slate-300 mb-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Live Session</span>
                </div>
                <button
                  onClick={handleEndCall}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-slate-500/25"
                >
                  <PhoneOff size={24} />
                  <span>End Session</span>
                </button>
              </div>
            )}

            {callStatus === "error" && (
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center max-w-md">
                  <p className="text-slate-200 font-medium">Connection failed</p>
                  <p className="text-slate-400/70 text-sm mt-1">{errorMsg}</p>
                </div>
                <button
                  onClick={resetSession}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center animate-fade-in-up delay-300">
            <button
              onClick={() => setShowTherapy(false)}
              className="text-slate-400/70 hover:text-slate-300 transition-colors duration-200 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </>
      )}

      {/* Summary Page */}
      {showTherapy && callStatus === "ended" && (
        <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-rose-50 to-mauve-50 flex flex-col items-center py-12 px-4">
          <div className="text-center mb-8 max-w-2xl animate-fade-in">
            <h1 className="text-6xl font-bold text-mauve-900 mb-4 tracking-tight">
              NeuroAid+
            </h1>
            <p className="text-lg text-mauve-700 mb-3">
              Session completed
            </p>
          </div>
          <SessionSummary />
        </div>
      )}
    </div>
  );
};

export default App;

