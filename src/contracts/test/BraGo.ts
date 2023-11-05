// import { expect } from 'chai';
// import { ethers } from 'hardhat';
// import { Contract, Signer } from 'ethers';

// describe('BraGo Contract', function () {
//   let BraGo: Contract;
//   let braGo: Contract;
//   let owner: Signer;
//   let addr1: Signer;
//   let addrs: Signer[];

//   beforeEach(async function () {
//     // Get the ContractFactory and Signers here.
//     const braGo= await ethers.deployContract("BraGo");
//     [owner, addr1, ...addrs] = await ethers.getSigners();
//     // Deploy a new BraGo contract before each test.
//     await braGo.waitForDeployment();
//   });

//   describe('Deployment', function () {
//     it('Should set the right owner', async function () {
//       expect(await braGo.owner()).to.equal(await owner.getAddress());
//     });

//     it('Should mint initial supply to the owner', async function () {
//       const ownerBalance = await braGo.balanceOf(await owner.getAddress());
//       expect(ownerBalance).to.equal(ethers.parseUnits('1000000', await braGo.decimals()));
//     });
//   });

//   describe('Minting', function () {
//     it('Should mint new tokens', async function () {
//       const mintAmount = ethers.parseUnits('100', await braGo.decimals());
//       await braGo.connect(owner).tranfer(await addr1.getAddress(), mintAmount, '0', '0', 'Test Message');
//       const addr1Balance = await braGo.balanceOf(await addr1.getAddress());
//       expect(addr1Balance).to.equal(mintAmount);
//     });

//     it('Should emit Transfer event on mint', async function () {
//       const mintAmount = ethers.parseUnits('100', await braGo.decimals());
//       await expect(braGo.connect(owner).transfer(await addr1.getAddress(), mintAmount, '0', '0', 'Test Message'))
//         .to.emit(braGo, 'Transfer')
//         .withArgs(await addr1.getAddress(), mintAmount, '0', '0', 'Test Message');
//     });
//   });
// });

import { expect } from 'chai';
import { ethers, ContractFactory, Contract } from 'hardhat';

describe('BraGo Contract', function () {
  let BraGo: ContractFactory;
  let braGo: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addrs: Signer[];

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    BraGo = await ethers.getContractFactory('BraGo');
    [owner, addr1, ...addrs] = await ethers.getSigners();

    // Deploy a new BraGo contract before each test.
    braGo = await BraGo.deploy(await owner.getAddress());
    await braGo.waitForDeployment()
  });

  describe('Deployment', function () {
    it('Should set the right owner', async function () {
      expect(await braGo.owner()).to.equal(await owner.getAddress());
    });

    it('Should mint initial supply to the owner', async function () {
      let decimals = await braGo.decimals();
      const ownerBalance = await braGo.balanceOf(await owner.getAddress());
      expect(ownerBalance).to.equal(ethers.parseUnits('100000', await braGo.decimals()));
    });
    // it('Should mint initial supply to the owner', async function () {
    //   const decimals = await braGo.decimals();
    //   const expectedBalance = ethers.parseUnits('100000', decimals);
    //   const ownerBalance = await braGo.balanceOf(await owner.getAddress());
    //   expect(ownerBalance.toString()).to.equal(expectedBalance.toString());
    // });
    
  });

  describe('Minting', function () {
    it('Should mint new tokens', async function () {
      const mintAmount = ethers.parseUnits('100', await braGo.decimals());
      await braGo.connect(owner).mint(await addr1.getAddress(), mintAmount, '0', '0', 'Test Message');
      const addr1Balance = await braGo.balanceOf(await addr1.getAddress());
      expect(addr1Balance).to.equal(mintAmount);
    });

    it('Should emit Transfer event on mint', async function () {
      const mintAmount = ethers.parseUnits('100', await braGo.decimals());
      await expect(braGo.connect(owner).mint(await addr1.getAddress(), mintAmount, '0', '0', 'Test Message'))
        .to.emit(braGo, 'BraGoTransfer')
        .withArgs(await addr1.getAddress(), mintAmount, '0', '0', 'Test Message');
    });
  });
});

