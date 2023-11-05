import { ethers } from "hardhat";


async function main() {
  const [owner] = await ethers.getSigners(); // オーナーのサインアップを取得
  const BraGo = await ethers.getContractFactory('BraGo');
  const braGo = await BraGo.deploy(await owner.getAddress());
  const constract = await braGo.waitForDeployment();
  console.log(`Contract Address: ${await constract.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

