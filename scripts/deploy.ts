const hre = require('hardhat')

async function main() {
  const UniswapV3Factory = await hre.ethers.getContractFactory('UniswapV3Factory')
  const uniswapV3Factory = await UniswapV3Factory.deploy()

  await uniswapV3Factory.deployed()

  console.log('UniswapV3Factory deployed to:', uniswapV3Factory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
