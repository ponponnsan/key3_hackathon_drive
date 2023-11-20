import React, { useState, useEffect } from "react";


interface AccountRecords {
    accountName: string;
    walletAddress: string;
}
// 送信先アドレスはGPSから取得できている前提
const AccountInfo = (): { accountInfos: AccountRecords } => {
    const [walletAddress, setWalletAddress] = useState("");
    const [accountName, setAccountName] = useState("");

    useEffect(() => {
        // useEffect内でlocalStorageからデータを取得
        const aawalletAddress = localStorage.getItem("walletAddress");
        const username = localStorage.getItem("username");
        if (username && aawalletAddress) {
          setAccountName(username);
          setWalletAddress(walletAddress);
        }
      }, []);


    const accountInfos: AccountRecords= {
        accountName,
        walletAddress
    };


    return {
        accountInfos
    };
}

export default AccountInfo;

