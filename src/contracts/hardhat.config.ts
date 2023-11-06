import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";


dotenv.config({ path: __dirname + "/.env" });
const ACCOUNT_PRIVATE_KEY = process.env.PRIVATE_KEY || "";
console.log("PrivateKey set:", !!ACCOUNT_PRIVATE_KEY)
const ALCHEMY_API_KEY_MUMBAI= process.env.ALCHEMY_API_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./src",
  },
  networks: {
      hardhat: {},
      // zKatana: {
      //   url: `https://rpc.zkatana.gelato.digital`,
      //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
      // },
      maticmum: {
        url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_MUMBAI}`,
        accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
      },
  },
};

export default config;