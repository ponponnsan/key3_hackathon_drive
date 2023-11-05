// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BraGo is ERC20, Ownable {

    event BraGoTransfer(address indexed to, uint256 amount, string longitude, string latitude, string message);

    constructor(address initialOwner) ERC20("BraGo", "BG") Ownable(initialOwner) {
        _mint(msg.sender  , 100000 * 10 ** decimals());
    }


    function mint(address to, uint256 amount, string calldata longitude, string calldata latitude, string calldata message) public onlyOwner {
        _mint(to, amount);

        emit BraGoTransfer(to, amount, longitude, latitude, message);
    }

}