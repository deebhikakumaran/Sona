import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-14 pt-2 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16 max-w-6xl">
          <div className="w-full md:w-1/2 space-y-6 text-left mb-10 md:mb-0 px-4 md:px-8 py-8 bg-card/40 backdrop-blur-sm rounded-3xl border border-gray-800/50">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              Automated AI DeFi Strategies Powered by ElizaOS
            </h1>
            <p className="text-md text-gray-300 max-w-md">
              Explore the future of decentralized finance with Sona
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/portfolio">
                <button className="px-6 py-2 rounded-lg bg-card border border-gray-700 text-white font-bold 
                text-lg hover:bg-card/80 transition-all">
                  Portfolio
                </button>
              </Link>
              <Link to="/vault">
                <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold text-lg px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/25">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e07b62aba34e52524e6c720aa4d6ce9637d4039?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="aspect-[1.57] object-contain w-[580px] self-stretch min-w-60 my-auto max-md:max-w-full"
            />
          </div>
        </div>

        <div className="mt-2">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-8 ml-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63d00f2b9ee0e214e9118063ac19c35462e27af8?placeholderIfAbsent=true"
                alt="Sona Logo"
                className="aspect-[1] object-contain w-[60px] shrink-0"
              />
              <div>
                <h3 className="text-white font-semibold">What is Sona?</h3>
                <p className="text-gray-400">
                  Discover the power of ElizaOS and Optimism bridge
                </p>
              </div>
            </div>
            <Link to="/docs">
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-2 rounded-lg text-sm shadow-lg transition-all duration-300 hover:shadow-purple-500/25 mr-6">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.15),transparent_70%)]" />
    </section>
  );
};
