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
            address: "0x1a4ac4bA30fA08e32F99A526DDF731f807b5a7F5", // 送付先アドレス
            message, // メッセージ
            latitude, // 緯度
            longitude // 経度 
        },
        {
            licenseNumber, // 免許証番号
            address: "0x694AecE1f422DF3c2B8F81CC5059065627f5F185", // 送付先アドレス
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
