"use client"
import React, { useEffect, useState } from 'react';
import WalletInfo from './WalletInfo';

const Account: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [accountname, setAccountName] = useState("")
  
  useEffect(() => {
    // useEffect内でlocalStorageからデータを取得
    const aawalletAddress = localStorage.getItem("walletAddress");
    const username = localStorage.getItem("username");
    if (username && aawalletAddress) {
      setAccountName(username);
      setWalletAddress(aawalletAddress);
    }
  }, []);

  return (
    <div>
      {/* ヘッダーやフッターなどの他のコンポーネントもここに含める */}
      <WalletInfo
        accountName={accountname}
        walletAddress={walletAddress}
      />
    </div>
  );
};

export default Account;
