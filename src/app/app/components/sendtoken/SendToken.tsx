"use client"
import React, { useState, useEffect } from "react";
import TokenCard from './TokenCard';
import ActionButton from '../utils/button/ActionButton';
import VoiceRecognitionButton from "../recognizevoice/recognizeSound"
import Popup from './Popup';
import { sendToken } from '../../utils/safe'


const SendToken: React.FC = () => {
  // ポップアップの表示状態を管理する状態
  const [showPopup, setShowPopup] = useState(false);
  const [isDrivingMode, setIsDrivingMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleStartDrivingClick = () => {
    setIsDrivingMode(true);
  };

  const handleVoiceStart = () => {
    // 音声認識開始時の処理
  };

  const handleVoiceStop = () => {
  };

  const handleVoiceRequest = async () => {
    const licenseNumber = localStorage.getItem("licenseNumber")
    // トークンを送る際の処理
    try{
      await sendToken(
        "11111111", // 免許証番号
        "0x1a4ac4bA30fA08e32F99A526DDF731f807b5a7F5", // 送付先アドレス
        "ありがとう", // メッセージ
        "35.666862", // 経度
        "139.692616" // 緯度 
      );
    } catch (error) {
      setErrorMessage('Your license number is invalid. Please ensure it is correct.');
      setShowPopup(true);
    }
  };

  useEffect(() => {
    // 1500ミリ秒（1.5秒）後にポップアップを非表示にする
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
          <VoiceRecognitionButton
            onStart={handleVoiceStart}
            onStop={handleVoiceStop}
            onTokenRequest={handleVoiceRequest}
          />
          {showPopup && <Popup isVisible={showPopup} errorMessage={errorMessage}/>}
        </>
      )}
    </>
  );
};

export default SendToken;
