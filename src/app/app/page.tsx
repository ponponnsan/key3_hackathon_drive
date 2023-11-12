import { createContractWallet, sendToken } from "@utils/aa/contractWallet";
// import { createSafeWallet } from "./utils/aa/safe";

const sleep = async (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export default function Home() {

  const createAAWallet = async () => {

    // const ecdsaProvider = await createContractWallet("000000000008");
    // console.log(
    //   `contractWalletAddress: ${await ecdsaProvider.getAddress()}`
    // );
    // await sleep(3000);
    // await sendToken(ecdsaProvider);
    console.log(`createAAWallet`);
    await createSafeWallet("000000000000");
  }

  createAAWallet()
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
