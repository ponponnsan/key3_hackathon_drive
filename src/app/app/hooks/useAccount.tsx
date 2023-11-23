import React, { useState, useEffect } from "react";


interface AccountRecords {
    accountName: string;
    walletAddress: string;
    licenseNumber: string;
}
// 送信先アドレスはGPSから取得できている前提
const AccountInfo = (): { accountInfos: AccountRecords } => {
    const [walletAddress, setWalletAddress] = useState("");
    const [accountName, setAccountName] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");

    useEffect(() => {
        // useEffect内でlocalStorageからデータを取得
        const aawalletAddress = localStorage.getItem("walletAddress");
        const username = localStorage.getItem("username");
        const licenseNumber = localStorage.getItem("licenseNumber")
        if (username && aawalletAddress && licenseNumber) {
          setAccountName(username);
          setWalletAddress(aawalletAddress);
          setLicenseNumber(licenseNumber);
        }
      }, []);


    const accountInfos: AccountRecords= {
        accountName,
        walletAddress,
        licenseNumber
    };


    return {
        accountInfos
    };
}

export default AccountInfo;

