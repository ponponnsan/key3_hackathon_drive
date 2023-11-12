import React, { useState } from 'react';
import ActionButton from '../utils/buttom/ActionButton';
import signupPopup from './signupPopup';


const LicenseNumberInput: React.FC = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);


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
            subText="登録がうまくった時と言ってなかったときの処理も書く"
            onClick={() => setShowPopup(true)}
          />
        </form>
        {showPopup && <signupPopup />}
      </div>
    </div>
  );
};

export default LicenseNumberInput;
