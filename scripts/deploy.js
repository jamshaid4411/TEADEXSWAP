const hre = require("hardhat");

async function main() {
  const TeaDEX = await hre.ethers.getContractFactory("TeaDEX");
  const teaDEX = await TeaDEX.deploy();

  await teaDEX.waitForDeployment(); // ✅ replaces deprecated .deployed()

  console.log(`TeaDEX deployed at: ${teaDEX.target}`); // ✅ use .target for address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
