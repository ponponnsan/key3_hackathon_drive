
import { useEffect, useState } from "react";
import { createAAWallet } from "../utils/safe";

export const useAddress = () => {
    const [address, setAddress] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const licenseNumber = localStorage.getItem("licenseNumber");
        console.log(licenseNumber);

        (async () => {
            // const address = await createAAWallet(licenseNumber as string);
            // console.log(address)
            setIsLoading(false);
            setAddress('0xcf6d953eD235B9B2Bf03b72fE08392a6f9d0edD8');
        })();
    }, [])

    // aaWalletAddress: 0xcf6d953eD235B9B2Bf03b72fE08392a6f9d0edD8

    return {
        address,
        isLoading
    };
};
