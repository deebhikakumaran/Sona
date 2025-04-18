// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import config from './config'
// import { config } from "./config/web3";
import "@rainbow-me/rainbowkit/styles.css";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Vault from "./pages/Vault";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        {/* <TooltipProvider> */}
          {/* <Toaster /> */}
          {/* <Sonner /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/vault" element={<Vault />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        {/* </TooltipProvider> */}
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
