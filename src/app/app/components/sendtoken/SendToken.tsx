"use client"
import React, { useState, useEffect } from "react";
import TokenCard from './TokenCard';
import ActionButton from '../utils/button/ActionButton';
import VoiceRecognitionButton from "../recognizevoice/recognizeSound"
import Popup from './Popup';

// 2回目以降のトークン送信にて、ポップアップが表示されない。

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
  };

  const handleVoiceRequest = () => {
    // トークンを送る際の処理
    setShowPopup(true);
  };

  useEffect(() => {
    // 2000ミリ秒（2秒）後にポップアップを非表示にする
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 1500);

    // コンポーネントがアンマウントされるときにタイマーをクリアする
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <>
      {!isDrivingMode ? (
        <>
          <TokenCard earnedTokens={24} spentTokens={44} />
          <ActionButton
            mainText="Start Driving"
            subText={`Turn on GPS to get location information.\n Tap to start voice instructions`}
            onClick={handleStartDrivingClick}
          />
        </>
      ) : (
        <>
          <TokenCard earnedTokens={24} spentTokens={44} />
          {/* <ActionButton
            mainText="BraGo, send tokens"
            subText="アプリ終了する時どうするか書く"
            onClick={() => setShowPopup(true)}
          /> */}
          <VoiceRecognitionButton
            onStart={handleVoiceStart}
            onStop={handleVoiceStop}
            onTokenRequest={handleVoiceRequest}
          />
          {showPopup && <Popup isVisible={showPopup} />}
        </>
      )}
    </>
  );
};

export default SendToken;
