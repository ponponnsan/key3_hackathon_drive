"use client"
import React, { useEffect, useState } from 'react';
import WalletInfo from './WalletInfo';
import AccountInfo from '@/app/hooks/useAccount';

const Account: React.FC = () => {
  const { accountInfos } = AccountInfo();

  return (
    <div>
      {/* ヘッダーやフッターなどの他のコンポーネントもここに含める */}
      <WalletInfo
        accountName={accountInfos.accountName}
        walletAddress={accountInfos.walletAddress}
        licenseNumber={accountInfos.licenseNumber}
      />
    </div>
  );
};

export default Account;
