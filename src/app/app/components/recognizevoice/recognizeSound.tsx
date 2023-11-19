import React, { useState, useEffect, useRef } from 'react';
import ActionButton from '../utils/button/ActionButton';
import IWindow from '../../utils/window';

// windowの型定義にIWindowを使う
declare const window: IWindow;

// ずっと会話が続くようにする。
// BraGo, send tokensの文言を変える。
interface VoiceRecognitionButtonProps {
  onStart: () => void;
  onStop: () => void;
  onTokenRequest: () => void;
}

const VoiceRecognitionButton: React.FC<VoiceRecognitionButtonProps> = ({ onStart, onStop, onTokenRequest }) => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState<string>("");
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;


  
  const handleRecogniteStart = () => {
    const recognition = new Recognition();
    recognition.lang = "ja-JP";
    recognition.interimResults = false;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;

    if (!recognition) return;


    recognition.onresult = (event) => {
      const results = event.results;
      let finalTranscript = '';
      for (let i = event.resultIndex; i < results.length; i++) {
        const transcript = results[i][0].transcript;
        if (results[i] && results[i][0]) {
          finalTranscript += transcript;
          }
        }
      setText(finalTranscript);
    };


    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    recognition.start();
  };

  useEffect(() => {
    if (text.includes("トークン 送って")) {
      alert("トークンを送信します！");
      onTokenRequest();
    }
  }, [text]);
  // , onTokenRequest



  const handleVoiceClick = () => {
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    setIsListening(true);
    handleRecogniteStart();
    onStart();
  };

  const stopListening = () => {
    setIsListening(false);
    onStop();
  };

  return (
    <ActionButton
      mainText={isListening ? "Listening..." : "Start Driving"}
      subText={isListening ? text : `Turn on GPS to get location information.\n Tap to start voice instructions`}
      onClick={handleVoiceClick}
    />
  );
};

export default VoiceRecognitionButton;
