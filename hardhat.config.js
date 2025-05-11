require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    teaSepolia: {
      url: "https://tea-sepolia.g.alchemy.com/public",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
