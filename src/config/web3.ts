import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

const config = createConfig(
  getDefaultConfig({
    appName: "Sona",
    projectId: "YOUR_WALLETCONNECT_PROJECT_ID",
    chains: [mainnet],
    // transports: {
    //   [mainnet.id]: http(),
    // },
  })
);

export default config;