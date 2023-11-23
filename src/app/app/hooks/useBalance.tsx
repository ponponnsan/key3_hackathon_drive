import React, { useState, useEffect } from 'react';
import { TokenProps } from "@/app/utils/interfaces"
import { useContract } from './useContract';
import useAccount from './useAccount';
import { useBraGoTransferRecords } from './useBraGoTransferRecords';


// interface currentToken {
//     balance: string, 
//     sent: string, 
//     received: string
// }

export const TokenBalance = (): TokenProps => {
    const { contract, isLoading: isContractLoading } = useContract();
    const { accountInfos } = useAccount();
    const [isLoading, setIsLoading] = useState(true);
    const { transferLogs, isLoading: logLoading } = useBraGoTransferRecords();

    // const getInitialValue = (key: string, defaultValue: number) => {
    //     const storedValue = localStorage.getItem(key);
    //     return storedValue !== null ? parseInt(storedValue, 10) : defaultValue;
    // };

    const [balance, setBalance] = useState(0);
    const [sent, setSent] = useState(22);
    const [received, setReceived] = useState(24);

    useEffect(() => {
        if (isContractLoading) return;
        if (logLoading) return;

        (async () => {
            const balance = await contract?.balanceOf(accountInfos.walletAddress);

            setBalance(Number(balance));

            setIsLoading(false);
        })();

        //送ったトークンの計算
        const sendTokenCount = transferLogs.filter(log => log.issend).length;
        //受け取ったトークンの計算
        const recvTokenCount = transferLogs.filter(log => !log.issend).length;

        setSent(sendTokenCount);
        setReceived(recvTokenCount);

    }, [isContractLoading, logLoading, transferLogs])

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

    // const sendBalance = () => {
    //     setSent(prevSent => prevSent + 1);
    //     setBalance(prevBalance => prevBalance - 1); // トークンを送付すると残高が減少します。
    // };

    // const receiveBalance = () => {
    //     setReceived(prevReceived => prevReceived + 1);
    //     setBalance(prevBalance => prevBalance + 1); // トークンを受領すると残高が増加します。
    // };


    return {
        balance,
        sent,
        received,
        isLoading,
        // sendBalance,
        // receiveBalance
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

