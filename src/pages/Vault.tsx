import React from "react";
import { Navbar } from "@/components/Layout/Navbar";

const Vault = () => {
  return (
    <main className="min-h-screen bg-[rgba(15,15,15,1)] text-white p-6">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Vaults</h1>
      <p className="text-lg">Available vaults will be displayed here.</p>
    </main>
  );
};

export default Vault;