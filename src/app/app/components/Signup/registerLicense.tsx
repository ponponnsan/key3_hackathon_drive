"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ActionButton from '../utils/buttom/ActionButton'; 
import SignupPopup from './signupPopup'; 

const LicenseNumberInput: React.FC = () => {
  const router = useRouter();
  const [licenseNumber, setLicenseNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを追加
    setShowPopup(true); // Popup表示

    // 送信処理が成功した後にナビゲーションを行う
    // 成功したと仮定していますが、実際には送信処理の結果に基づいてください
    router.push('/account');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="license-number" className="block text-gray-700 text-sm font-bold mb-2">
              運転免許証番号を入力
            </label>
            <input
              type="text"
              id="license-number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <ActionButton
            mainText="登録"
            subText="登録がうまくいった時といってなかった時の処理も書く"
          />
        </form>
        {showPopup && <SignupPopup />}
      </div>
    </div>
  );
};

export default LicenseNumberInput;
