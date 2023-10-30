// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BraGo is ERC20 {
    constructor() ERC20("BraGo", "BG") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}