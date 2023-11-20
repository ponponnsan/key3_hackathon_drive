import React, { useState, useEffect } from 'react';


interface TokenProps {
    balance: number,
    sent: number,
    received: number,
    sendBalance: () => void,
    receiveBalance: () => void
}

interface currentToken {
    balance: string, 
    sent: string, 
    received: string
}

export const TokenBalance = (): TokenProps => {
    // const getInitialValue = (key: string, defaultValue: number) => {
    //     const storedValue = localStorage.getItem(key);
    //     return storedValue !== null ? parseInt(storedValue, 10) : defaultValue;
    // };

    const [balance, setBalance] = useState(20);
    const [sent, setSent] = useState(22);
    const [received, setReceived] = useState(24);

    // useEffect(() => {
    // // sent が更新された後に localStorage に保存します
    //     localStorage.setItem("sent", sent.toString());
    // }, [sent]); // sent が変更されたときのみ useEffect をトリガー
  
    // useEffect(() => {
    // // received が更新された後に localStorage に保存します
    //     localStorage.setItem("received", received.toString());
    // }, [received]); // received が変更されたときのみ useEffect をトリガー
  
    // useEffect(() => {
    // // balance が更新された後に localStorage に保存します
    //     localStorage.setItem("balance", balance.toString());
    // }, [balance]); // balance が変更されたときのみ useEffect をトリガー

    const sendBalance = () => {
        setSent(prevSent => prevSent + 1);
        setBalance(prevBalance => prevBalance - 1); // トークンを送付すると残高が減少します。
    };

    const receiveBalance = () => {
        setReceived(prevReceived => prevReceived + 1);
        setBalance(prevBalance => prevBalance + 1); // トークンを受領すると残高が増加します。
    };

    
    return {
        balance,
        sent,
        received,
        sendBalance,
        receiveBalance
    };
};

// export const currentBalance = (): currentToken => {
//     const [balance, setBalance] = useState("");
//     const [sent, setSent] = useState("");
//     const [received, setReceived] = useState("");

//     useEffect(() => {
//         // useEffect内でlocalStorageからデータを取得
//         const balance = localStorage.getItem("balance");
//         const sent =localStorage.getItem("sent");
//         const received = localStorage.getItem("received");

//         if (balance  && sent && received) {
//           setBalance(balance)
//           setSent(sent)
//           setReceived(received)
//         }
//       }, []);


//     return {
//         balance,
//         sent,
//         received
//     };
// }

