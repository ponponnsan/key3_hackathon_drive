"use client"
import React, { useState, useEffect } from "react";
import TokenCard from './TokenCard';
import VoiceRecognitionButton from "../recognizevoice/recognizeSound"
import Popup from './Popup';
import { sendToken } from '../../utils/safe'
import useSendTokenQuery from '@/app/hooks/useSendToken';
import { TokenBalance } from "@/app/hooks/useBalance";


const SendToken: any = () => {
  // ポップアップの表示状態を管理する状態
  const [showPopup, setShowPopup] = useState(false);
  const [isDrivingMode, setIsDrivingMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { mapsErrorMessage, sendTokenRecords, isLoading } = useSendTokenQuery();
  const { balance, sent, received, isLoading: balanceLoading } = TokenBalance();
  // const { } = currentBalance();



  const handleVoiceStart = () => {
    // 音声認識開始時の処理
    setIsDrivingMode(true);
  };

  const handleVoiceStop = () => {
  };


  const handleVoiceRequest = async () => {
    // トークンを送る際の処理
    try {

      await Promise.all(sendTokenRecords.map(record => {
        console.log(`latitude: ${record.latitude}, longitude: ${record.longitude}`);

        return sendToken(
          record.licenseNumber,
          record.address,
          record.message,
          record.latitude,
          record.longitude
        )
      }));
      if (mapsErrorMessage !== '') {
        setErrorMessage(mapsErrorMessage);
        setShowPopup(true);
      }
      setShowPopup(true);
      // sendBalance();
    } catch (error) {
      setErrorMessage('Failed to send token... please try again');
      setShowPopup(true);
    }
  };

  useEffect(() => {
    // ポップアップを非表示にする
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 2500);

    // コンポーネントがアンマウントされるときにタイマーをクリアする
    return () => clearTimeout(timer);
  }, [showPopup]);

  if (isLoading || balanceLoading) {
    // ロード中の場合はローディングメッセージを表示
    return <div>Loading...</div>;
  }

  return (
    <>
      <TokenCard balance={balance} sent={sent} received={received} />
      <div className="flex flex-col min-h-screen bg-purple-400 dark:bg-gray-200 rounded-md mt-32">
        <VoiceRecognitionButton
          style={{ backgroundColor: 'white' }}
          onStart={handleVoiceStart}
          onStop={handleVoiceStop}
          onTokenRequest={handleVoiceRequest}
        />
      </div>
      {showPopup && <Popup isVisible={showPopup} errorMessage={errorMessage} balance={balance} />}
    </>
  );
};

export default SendToken;
