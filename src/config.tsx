import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, optimism, sepolia, } from 'wagmi/chains';
// import { http, createConfig } from 'wagmi'
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, optimism, sepolia],
  // transports: {
  //   [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/...'),
  //   [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'),
  // },
  ssr: true,
});

// , ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : [])

export default config;


// Wagmi Config
// createConfig({
//   chains: [base],
//   connectors: [metaMask()],
//   transports: {
//     [base.id]: http('https://base-mainnet.g.alchemy.com/v2/<YOUR_KEY>'), // Node provider
//   },
// })
