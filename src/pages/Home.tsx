import '@rainbow-me/rainbowkit/styles.css';
import { Navbar } from "@/components/Layout/Navbar";
import { Hero } from "@/components/Sections/Hero";
import { Features } from "@/components/Sections/Features";
import { Architecture } from "@/components/Sections/Architecture";
import { VaultService } from "@/components/Sections/VaultService";
import { CTA } from "@/components/Sections/CTA";
import { Footer } from "@/components/Layout/Footer";

function Home() {

  return (
    <>
        <main className="min-h-screen bg-[rgba(15,15,15,1)] text-white p-6">
            <Navbar />
            <Hero />
            <Features />
            <Architecture />
            <VaultService />
            <CTA />
            <Footer />
        </main>
    </>
  )
}

export default Home


