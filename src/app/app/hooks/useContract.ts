
import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";

import {
    CONTRACT_ADDRESS,
} from '../utils/config';

import Abi from '../../../contracts/src/contracts/BraGo.sol/BraGo.json'

export const useContract = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [contract, setContract] = useState<Contract | undefined>(undefined);

    useEffect(() => {
        const rpcUrl =
            // `https://rpc.startale.com/zkatana`;
            `https://rpc.zkatana.gelato.digital/`;

        // Providerインスタンス作成
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

        // Contractインスタンス作成
        const contract: Contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            Abi.abi,
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
