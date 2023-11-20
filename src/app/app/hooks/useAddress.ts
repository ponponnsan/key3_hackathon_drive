
import { useEffect, useState } from "react";
import { createAAWallet } from "../utils/safe";

export const useAddress = () => {
    const [address, setAddress] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const licenseNumber = localStorage.getItem("licenseNumber");

        (async () => {
            // const address = await createAAWallet(licenseNumber as string);
            setIsLoading(false);
            setAddress(address);
            setAddress('0x983B272F9d69248E670b646538Eb86587C9c496c');   //デバッグ用にcardeneさんのアドレス固定
        })();
    }, [])

    return {
        address,
        isLoading
    };
};
