// components/WalletInfo.tsx
import React from 'react';
import Image from 'next/image';

interface WalletInfoProps {
  accountName: string;
  walletAddress: string;
}

const WalletInfo: React.FC<WalletInfoProps> = ({ accountName, walletAddress }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 m-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-200 h-14 w-14">
          <Image
            src="/icon.png" // 画像のパスを適宜変更してください
            alt="アイコン"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{accountName}</h3>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-bold">My wallet</h4>
        <p className="text-sm">{walletAddress}</p>
      </div>
      {/* ...その他のUI要素... */}
    </div>
  );
};

export default WalletInfo;
