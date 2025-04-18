import React from "react";
import { Link, useLocation } from "react-router";
import cn from "classnames";
import { useConnectModal } from '@rainbow-me/rainbowkit';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname === to;
  
  return (
    <Link to={to} className={cn("relative", active && "text-[#b96bfc]")}>
      <div>{children}</div>
      {active && <div className="bg-[rgba(185,107,252,1)] flex shrink-0 h-0.5" />}
    </Link>
  );
};

export const Navbar = () => {
  const { openConnectModal } = useConnectModal();
  return (
    <nav className="z-50 pt-2">
      <div className="mx-auto px-14 py-4">
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63d00f2b9ee0e214e9118063ac19c35462e27af8?placeholderIfAbsent=true"
                alt="Sona Logo"
                className="aspect-[1] object-contain w-[60px] shrink-0"
              />
              <span className="text-white text-xl font-semibold ml-4">
                Sona
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/vault">Vaults</NavItem>
              <NavItem to="/portfolio">Portfolio</NavItem>
              <NavItem to="/docs">Docs</NavItem>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-2 rounded-lg font-bold text-lg shadow-lg 
            transition-all duration-300 hover:shadow-purple-500/25" onClick={openConnectModal}>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav> 
    
  );
};




    