"use client"
import React, { useState, useEffect } from "react";
import TokenCard from './TokenCard';
import VoiceRecognitionButton from "../recognizevoice/recognizeSound"
import Popup from './Popup';
import { sendToken } from '../../utils/safe'
import useSendTokenQuery from '@/app/hooks/useSendToken';



const SendToken:any = () => {
  // ポップアップの表示状態を管理する状態
  const [showPopup, setShowPopup] = useState(false);
  const [isDrivingMode, setIsDrivingMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { mapsErrorMessage, sendTokenRecords } = useSendTokenQuery();


  const handleVoiceStart = () => {
    // 音声認識開始時の処理
    setIsDrivingMode(true);
  };

  const handleVoiceStop = () => {
  };


  const handleVoiceRequest = async () => {
    // トークンを送る際の処理
      try{
        await Promise.all(sendTokenRecords.map(record => 
          sendToken(
            record.licenseNumber,
            record.address,
            record.message,
            record.latitude,
            record.longitude
          )
        ));
    
        setShowPopup(true)
      } catch (error) {
        setErrorMessage('Failed to send token... please try again');
        setShowPopup(true);
      }
    };

  useEffect(() => {
    // 1500ミリ秒（1.5秒）後にポップアップを非表示にする
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // コンポーネントがアンマウントされるときにタイマーをクリアする
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
      <>
        <TokenCard earnedTokens={24} spentTokens={44} />
        <VoiceRecognitionButton
          onStart={handleVoiceStart}
          onStop={handleVoiceStop}
          onTokenRequest={handleVoiceRequest}
        />
        {showPopup && <Popup isVisible={showPopup} errorMessage={errorMessage}/>}
      </>
  );
};

export default SendToken;
