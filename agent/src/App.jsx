import React, { useEffect, useRef, useState } from 'react'; 
import { PhoneCall, Brain, PhoneOff } from 'lucide-react';
import Vapi from "@vapi-ai/web";

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

const App = () => {
  const vapiRef = useRef(null);
  const [callStatus, setCallStatus] = useState("not-started");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (callStatus === "starting") {
      if (!vapiRef.current) {
        vapiRef.current = new Vapi(PUBLIC_KEY);

        const onCallStart = () => {
          console.log("Call started");
          setCallStatus("in-progress");
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">🧠 NeuroAid+</h1>
        <p className="text-lg text-slate-600">
          {callStatus === "starting" ? "Connecting to your therapist..." : 
           callStatus === "in-progress" ? "Session in progress" :
           callStatus === "ended" ? "Session completed" :
           callStatus === "error" ? "Connection failed" :
           "Ready to start your therapy session"}
        </p>
      </div>

      {/* Video Call Interface */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 max-w-4xl w-full">
        {/* AI Therapist Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-h-[320px] aspect-[4/3] border border-slate-200">
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg relative overflow-hidden">
            {/* Brain graphic for AI */}
            <div className="relative">
              <Brain size={48} className="text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
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
          <h3 className="text-xl font-semibold text-slate-800 mb-2">AI Therapist</h3>
          <p className="text-sm text-slate-500 mb-3">Dr. Neural</p>
          <div className={`w-3 h-3 rounded-full ${
            callStatus === "in-progress" ? "bg-green-500 animate-pulse" : 
            callStatus === "starting" ? "bg-yellow-500 animate-pulse" : 
            "bg-slate-300"
          }`}></div>
        </div>

        {/* User Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-h-[320px] aspect-[4/3] border border-slate-200">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">U</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">You</h3>
          <p className="text-sm text-slate-500 mb-3">Patient</p>
          <div className={`w-3 h-3 rounded-full ${
            callStatus === "in-progress" ? "bg-green-500 animate-pulse" : 
            callStatus === "starting" ? "bg-yellow-500 animate-pulse" : 
            "bg-slate-300"
          }`}></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center space-y-4">
        {callStatus === "not-started" && (
          <button
            onClick={handleStartCall}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-200 flex items-center space-x-3 hover:scale-105"
          >
            <PhoneCall size={24} />
            <span>Start Session</span>
          </button>
        )}

        {callStatus === "starting" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
            <p className="text-slate-600">Establishing secure connection...</p>
          </div>
        )}

        {callStatus === "in-progress" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-emerald-600 mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Live Session</span>
            </div>
            <button
              onClick={handleEndCall}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-200 flex items-center space-x-3 hover:scale-105"
            >
              <PhoneOff size={24} />
              <span>End Session</span>
            </button>
          </div>
        )}

        {callStatus === "ended" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">Session completed successfully</p>
              <p className="text-green-600 text-sm mt-1">Thank you for using NeuroAid+</p>
            </div>
            <button
              onClick={resetSession}
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-200 hover:scale-105"
            >
              Start New Session
            </button>
          </div>
        )}

        {callStatus === "error" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center max-w-md">
              <p className="text-red-800 font-medium">Connection failed</p>
              <p className="text-red-600 text-sm mt-1">{errorMsg}</p>
            </div>
            <button
              onClick={resetSession}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-200 hover:scale-105"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-slate-500 text-sm">
          Secure • Private • Professional
        </p>
      </div>
    </div>
  );
};

export default App;

