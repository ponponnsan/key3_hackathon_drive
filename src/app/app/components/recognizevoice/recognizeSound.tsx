import React, { useState, useEffect, useRef } from 'react';
import ActionButton from '../utils/button/ActionButton';

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
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const handleRecogniteStart = () => {
    const recognition = new webkitSpeechRecognition();
    recognitionRef.current = recognition; // 参照を保存
    recognition.lang = "ja-JP";
    recognition.interimResults = false;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const results = event.results;
      let finalTranscript = '';
      for (let i = event.resultIndex; i < results.length; i++) {
        finalTranscript += results[i][0].transcript;
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

  useEffect(() => {
    return () => {
      // コンポーネントのアンマウント時に音声認識を停止
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

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
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    onStop();
  };

  return (
    <ActionButton
      mainText={isListening ? "Listening..." : "BraGo, send tokens"}
      subText={isListening ? text : "アプリ終了する時どうするか書く"}
      onClick={handleVoiceClick}
    />
  );
};

export default VoiceRecognitionButton;
