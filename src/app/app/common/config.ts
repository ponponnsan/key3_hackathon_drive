import * as dotenv from "dotenv";
dotenv.config();

export const PROJECT_ID = process.env.PROJECT_ID as string;
export const ZERO_DEV_CUSTODIAL_PRIVATE_KEY = process.env
  .ZERO_DEV_CUSTODIAL_PRIVATE_KEY as string;
export const ZERO_DEV_CUSTODIAL_PUBLIC_KEY = process.env
  .ZERO_DEV_CUSTODIAL_PUBLIC_KEY as string;
export const ZERO_DEV_CUSTODIAL_KEY_ID = process.env
  .ZERO_DEV_CUSTODIAL_KEY_ID as string;
export const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
export const OWNER_PUBLIC_KEY = process.env.OWNER_PUBLIC_KEY as `0x${string}`;

export const PROVIDER_URL = "https://rpc.zkatana.gelato.digital";
export const CONTRACT_ADDRESS = "0x9743e736159786Fe49Bf89b6D0Fb56c227a41608";
export const RECEIVE_TOKEN_ADDRESS = process.env.RECEIVE_TOKEN_ADDRESS;
