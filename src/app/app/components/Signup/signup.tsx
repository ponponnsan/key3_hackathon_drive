// pages/signup.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ActionButton from '../utils/button/ActionButton';




const ConfirmLicense: React.FC = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    // 必要なロジックを実行
    router.push('/license-input');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
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
        <p className="text-center mb-4 dark:text-white">車社会に「ありがとう」と「良い行動」を増やす</p>
        <p className="text-sm text-center mb-8 dark:text-white">Pigeonを通じて、安全で快適な運転体験をサポートします。</p>
        <ActionButton
            mainText="はじめる"
            subText=""
            onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default ConfirmLicense;
