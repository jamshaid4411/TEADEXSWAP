# 🫖 TEADEXSWAP

A decentralized exchange prototype deployed on the Tea Sepolia testnet.

## 📌 Overview

**TEADEXSWAP** is a simple smart contract designed as a testbed for decentralized exchange logic, built with Solidity and deployed using Hardhat. This project is deployed on the Tea Sepolia network for testing and development purposes.

## 🧱 Smart Contract

### Contract: `TeaDEX.sol`

```solidity
pragma solidity ^0.8.20;

contract TeaDEX {
    string public name = "TeaDEX Swap";

    function greet() external pure returns (string memory) {
        return "Welcome to TeaDEX on Tea Sepolia!";
    }
}
```

## 🚀 Deploy

To deploy this contract on the **Tea Sepolia** network:

### 1. Clone the repo
```bash
git clone https://github.com/your-username/TEADEXSWAP.git
cd TEADEXSWAP
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment

Create a `.env` file:
```env
PRIVATE_KEY=your_private_key_here
```

### 4. Deploy the contract
```bash
npx hardhat run scripts/deploy.js --network teaSepolia
```

## 📜 License

This project is licensed under the MIT License.
