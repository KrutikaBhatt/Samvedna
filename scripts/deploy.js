async function main() {
  const contract = await ethers.getContractFactory("samvedna");
  const samvednaContract = await contract.deploy();
  await samvednaContract.deployed();
  return samvednaContract;
}

main()
  .then(async (contract) => {
    console.log("samvednaContract deployed at: ", contract.address);
  })
  .catch((error) => {
    console.error("failed to deploy samvednaContract", error);
  });
