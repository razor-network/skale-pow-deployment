//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract PoWSecure {
    event Payed(
        address indexed payee,
        uint256 indexed amount,
        uint256 indexed timestamp
    );

    uint256 private constant MAX_AMOUNT = 0.005 ether;
    uint256 private constant AMOUNT = 0.005 ether;

    constructor() payable {}

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function pay(address payable receiver) external payable {
        uint256 receiverBalance = receiver.balance;
        if (receiverBalance < MAX_AMOUNT) {
            receiver.transfer(AMOUNT);
            emit Payed(receiver, AMOUNT, block.timestamp);
        }
    }
}
