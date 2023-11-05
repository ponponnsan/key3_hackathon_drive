import { ethers } from "hardhat";


async function main() {
  const BraGo = await ethers.getContractFactory('BraGo');
  const braGo = await BraGo.deploy();
  const constract = await braGo.waitForDeployment();
  console.log(`Contract Address: ${await constract.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

