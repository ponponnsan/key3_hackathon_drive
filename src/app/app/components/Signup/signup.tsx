// pages/signup.tsx
import React from 'react';
import Image from 'next/image';
import LicenseNumberInput from "./registerLicense";

const ConfirmLicense: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        
        {/* 画像ファイルの表示 */}
        <div className="flex justify-center mb-4">
          <Image
            src="/Frame_48096317.png" // 画像のパスを適宜変更してください
            alt="サービス紹介の図"
            width={320}
            height={180}
            className="rounded-lg"
          />
        </div>
        {/* サービス名と説明 */}
        <p className="text-center mb-4">車社会に「ありがとう」を増やし、「良い行動」を増やす</p>
        <p className="text-sm text-center mb-8">
          BraGoを通じて、安全で快適な運転体験をサポートします。
        </p>
        <button
          onClick={LicenseNumberInput}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          登録
        </button>
      </div>
    </div>
  );
};

export default ConfirmLicense;
