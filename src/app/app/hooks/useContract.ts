
import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";

import {
    CONTRACT_ADDRESS,
} from '../common/config';

export const useContract = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [contract, setContract] = useState<Contract | undefined>(undefined);
    const abi = [{
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "longitude",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "latitude",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "BraGoTransfer",
        "type": "event"
    }];

    useEffect(() => {
        const rpcUrl =
            // `https://rpc.startale.com/zkatana`;
            `https://rpc.zkatana.gelato.digital/`;

        // Providerインスタンス作成
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

        // Contractインスタンス作成
        const contract: Contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            abi,
            provider
        );
        setIsLoading(false);
        setContract(contract);

    }, [])


    return {
        contract,
        isLoading,
    };
};
