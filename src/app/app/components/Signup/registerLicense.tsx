"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ActionButton from '../utils/button/ActionButton'; 
import SignupPopup from './signupPopup'; 
import { isNumericString } from '../utils/errorhandling';
import { createAAWallet } from '../../utils/safe'

const LicenseNumberInput: React.FC = () => {
  const router = useRouter();
  const [licenseNumber, setLicenseNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (isNumericString(licenseNumber)){
      // createAAWallet 関数を呼び出し
      await createAAWallet(licenseNumber);
      localStorage.setItem("licenseNumber", `${licenseNumber}`);

      // 処理が成功したら、ポップアップを表示し、アカウントページへ遷移
      setShowPopup(true);
      router.push('/account');
    } else {
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
            subText="半角数字で入力"
          />
        </form>
        {showPopup && <SignupPopup isVisible={showPopup} errorMessage={errorMessage} />}
      </div>
    </div>
  );
};

export default LicenseNumberInput;
