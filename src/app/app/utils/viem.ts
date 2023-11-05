import { PRIVATE_KEY } from "@/common/config";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { polygonMumbai, astarZkatana } from "viem/chains";

const account = privateKeyToAccount(
  PRIVATE_KEY
);

export const walletClient = createWalletClient({
  account,
  chain: polygonMumbai,
  transport: http(),
});
