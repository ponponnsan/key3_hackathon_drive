import React, { useState, useEffect } from "react";
import { TokenRecord } from "../utils/interfaces";


// 送信先アドレスはGPSから取得できている前提
const SendTokenQuery = (): { mapsErrorMessage: string; sendTokenRecords: TokenRecord[]; isLoading: boolean } => {
    const [licenseNumber, setLicenseNumber] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [message, setMessage] = useState("");
    const [mapsErrorMessage, setmapsErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const aalicenseNumber = localStorage.getItem("licenseNumber");
      if (aalicenseNumber) {
        setLicenseNumber(aalicenseNumber);
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
          setIsLoading(false); // 位置情報の取得が完了したら isLoading を false に設定
        },
        (error) => {
          setmapsErrorMessage("位置情報の取得に失敗しました");
          setIsLoading(false); // エラーが発生したら isLoading を false に設定

        }
      );
    }, []);


    useEffect(() => {
        setMessage("ありがとう");
    }, []);

    const sendTokenRecords = [
        {
            licenseNumber, // 免許証番号
            address: "0x768403FE32b6FbE2E53bF72175679ec5db7d4AaB", // 送付先アドレス
            message, // メッセージ
            latitude, // 緯度
            longitude // 経度 
        },
        {
            licenseNumber, // 免許証番号
            address: "0xece27cf19B0921ce013368643e11C2a88A26701e", // 送付先アドレス
            message, // メッセージ
            latitude, // 緯度
            longitude // 経度 
        },
    ];

    
    return {
        mapsErrorMessage,
        sendTokenRecords,
        isLoading
    };
}

export default SendTokenQuery;
