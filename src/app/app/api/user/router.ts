import { createSafeWallet, getSafeWallet, sendToken } from "../../utils/safe";
import { IToken, IUser } from "../../common/interfaces";

import type { NextApiRequest, NextApiResponse } from "next";

export const createAddress = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const requestBody = req.body as IUser;
    const licenseNumber = requestBody.licenseNumber || "";

    let aaWalletAddress: string = "";
    try {
      aaWalletAddress = await createSafeWallet(licenseNumber);
    } catch (err) {
      const { safeSDK } = await getSafeWallet(licenseNumber);
      aaWalletAddress = await safeSDK.getAddress();
    }
    res.status(200).json({ address: aaWalletAddress });
    return;
  } catch (err) {
    res.status(200).json({ message: "internal server error" });
  }
};
