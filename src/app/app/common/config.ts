import * as dotenv from "dotenv";
dotenv.config();

export const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
export const OWNER_PUBLIC_KEY = process.env.OWNER_PUBLIC_KEY as `0x${string}`;

export const PROVIDER_URL = "https://rpc.zkatana.gelato.digital";
export const CONTRACT_ADDRESS = "0x9743e736159786Fe49Bf89b6D0Fb56c227a41608";
export const RECEIVE_TOKEN_ADDRESS = process.env.RECEIVE_TOKEN_ADDRESS;
