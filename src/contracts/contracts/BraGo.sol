// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BraGo is ERC20 {

    event BraGoTransfer(address indexed to, uint256 amount, string longitude, string latitude, string message);

    constructor() ERC20("BraGo", "BG") {
         // 初期発行を行わないため、コンストラクタは空にします。
    }


    function mint(address to, uint256 amount, string calldata longitude, string calldata latitude, string calldata message) public {
        _mint(to, amount);

        emit BraGoTransfer(to, amount, longitude, latitude, message);
    }

}