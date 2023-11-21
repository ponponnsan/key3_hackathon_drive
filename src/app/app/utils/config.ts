import * as dotenv from 'dotenv';
dotenv.config();

export const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY as `0x${string}`;
export const GELATO_RELAY_API_KEY = process.env.NEXT_PUBLIC_GELATO_RELAY_API_KEY;
export const PROVIDER_URL = 'https://rpc.zkatana.gelato.digital';
export const CONTRACT_ADDRESS = '0x9743e736159786Fe49Bf89b6D0Fb56c227a41608';
