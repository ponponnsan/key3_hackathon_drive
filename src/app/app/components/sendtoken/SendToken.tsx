"use client"
import React, { useState } from 'react';
import TokenCard from './TokenCard';
import ActionButton from '../utils/buttom/ActionButton';
import VoiceRecognitionButton from "../recognizevoice/recognizeSound"
import Popup from './Popup';


const SendToken: React.FC = () => {
  // ポップアップの表示状態を管理する状態
  const [showPopup, setShowPopup] = useState(false);
  const [isDrivingMode, setIsDrivingMode] = useState(false);

  const handleStartDrivingClick = () => {
    setIsDrivingMode(true);
  };

  const handleVoiceStart = () => {
    // 音声認識開始時の処理
  };

  const handleVoiceStop = () => {
    // 音声認識終了時の処理
    setShowPopup(true);
  };

  return (
    <>
      {!isDrivingMode ? (
        <>
          <TokenCard earnedTokens={24} spentTokens={44} />
          <ActionButton mainText="Start Driving" subText={`Turn on GPS to get location information.\n Tap to start voice instructions`} onClick={handleStartDrivingClick} />
        </>
      ) : (
        <>
          <TokenCard earnedTokens={24} spentTokens={44} />
          {/* <ActionButton
            mainText="BraGo, send tokens"
            subText="アプリ終了する時どうするか書く"
            onClick={() => setShowPopup(true)}
          /> */}
          <VoiceRecognitionButton onStart={handleVoiceStart} onStop={handleVoiceStop} />
          {showPopup && <Popup />}
        </>
      )}

    </>
  );
};

export default SendToken;
