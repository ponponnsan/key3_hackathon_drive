// pages/index.tsx
import React from 'react';
import WalletInfo from './WalletInfo';

const Account: React.FC = () => {
  return (
    <div>
      {/* ヘッダーやフッターなどの他のコンポーネントもここに含める */}
      <WalletInfo
        accountName="Account Name"
        walletAddress="0x8426d8d1252bc3325b..."
      />
      {/* ... */}
    </div>
  );
};

export default Account;
