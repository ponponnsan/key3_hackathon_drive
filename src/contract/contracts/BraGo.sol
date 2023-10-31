// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BraGo is ERC20, Ownable(msg.sender){
    constructor() ERC20("BraGo", "BG") {
        _mint(msg.sender, 1000000 * decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function getTokenBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }
}