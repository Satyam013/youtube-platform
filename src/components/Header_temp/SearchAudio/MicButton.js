import { useState, useEffect, useRef } from "react";
import MicrophoneIcon from "./MicrophoneIcon";

const MicButton = ({ onVoiceResult }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const micRef = useRef(null);

  useEffect(() => {
    // Set up SpeechRecognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      onVoiceResult(spokenText);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, [onVoiceResult]);

  // Close mic when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (micRef.current && !micRef.current.contains(e.target)) {
        stopListening();
      }
    };

    if (isListening) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isListening]);

  const toggleMic = () => {
    if (isListening) {
      stopListening();
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  return (
    <button
      ref={micRef}
      onClick={toggleMic}
      title="Search by Voice"
      className={`ml-2 p-2 rounded-full transition-all duration-200 hover:bg-green-500 hover:dark:bg-green-600
        ${isListening ? "scale-150 bg-black" : "bg-transparent"}
      `}
    >
      <MicrophoneIcon
        className={`w-6 h-6 
          transition-colors duration-200
          ${isListening ? "text-red-600" : "text-black-600"}
        `}
      />
    </button>
  );
};

export default MicButton;
