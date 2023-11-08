import { ethers } from "hardhat";


async function main() {
  const BraGo = await ethers.getContractFactory('BraGo');
  const braGo = await BraGo.deploy();
  const contract = await braGo.waitForDeployment();
  const deploymentTx = contract.deploymentTransaction()
  console.log(`Contract Address: ${await contract.target}`);
  console.log(`Tx Hash: ${deploymentTx?.hash}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

