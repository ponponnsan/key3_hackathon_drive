"use client"
import React, { useEffect, useState } from 'react';
import WalletInfo from './WalletInfo';

const Account: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const aawalletAddress = localStorage.getItem("walletAddress");
  if (aawalletAddress) {
    setWalletAddress(aawalletAddress);
  }
  return (
    <div>
      {/* ヘッダーやフッターなどの他のコンポーネントもここに含める */}
      <WalletInfo
        accountName="Account Name"
        walletAddress={walletAddress}
      />
    </div>
  );
};

export default Account;
