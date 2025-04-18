 import "@/assets/styles/Feature.css";

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const Features = () => {
  const features = [
    {
      id: 1,
      title: "AI Agents",
      description: "Advanced AI algorithms for smart trading",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/630582c876ed0a867b3edbab1913e8aff07ac010?placeholderIfAbsent=true",
      imagePosition: "top-left",
    },
    {
      id: 2,
      title: "Account Abstraction",
      description: "Simplify your transactions",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/54e634c56a86906cfa8beab0bb76d5321a3a0797?placeholderIfAbsent=true",
      imagePosition: "top-center",
    },
    {
      id: 3,
      title: "Vault Tracking",
      description: "Monitor your assets with precision",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f024c97cd46ebbbe637629f5ed3389d33c4f8b?placeholderIfAbsent=true",
      imagePosition: "top-right",
    },
    {
      id: 4,
      title: "Ecosystem Support",
      description: "Seamless integration across platforms",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b1fe25650909b4920350435f717e52d0576c847?placeholderIfAbsent=true",
      imagePosition: "bottom",
      fullWidth: true,
    },
  ];

  return (
    <section className="py-16 px-5 md:px-10 mx-auto max-w-6xl relative border-t border-gray-800">
      <div className="flex items-start gap-4 mb-12">
        <div className="relative w-16 h-16 flex-shrink-0">
          <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-lg -z-10"></div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de37a1c3c2fa0462b7bdb20826a055716e295eb4?placeholderIfAbsent=true"
            alt="Features"
            className="aspect-[1] object-contain w-[180px]"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Features</h2>
          <p className="text-sm text-white font-medium">
            Cutting edge offerings tailored for your DeFi needs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.slice(0, 3).map((feature) => (
          <Card
            key={feature.id}
            className="bg-[#1E2235]/80 border border-purple-900/40 rounded-2xl feature-card overflow-hidden hover:border-purple-700/50 transition-all duration-300 w-full"
          >
            <div className="p-0">
              <div className="relative h-56 w-full overflow-hidden feature-image">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[1] object-contain w-full"
                />
                {/* <div className="absolute inset-0 bg-purple-500/10"></div> */}
              </div>
              <div className="p-4 feature-info">
                <h4 className="text-xs text-gray-400 mb-1 feature-tag">{feature.title}</h4>
                <p className="text-sm text-white font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <Card className="bg-[#1E2235]/80 border border-purple-900/40 rounded-2xl overflow-hidden hover:border-purple-700/50 transition-all duration-300 feature-card">
          <div className="p-0">
            <div className="relative h-44 w-full overflow-hidden feature-image">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1fe25650909b4920350435f717e52d0576c847?placeholderIfAbsent=true"
                alt="Ecosystem Support"
                className="aspect-[1] object-contain w-full"
              />
              <div className="absolute inset-0 bg-purple-500/10"></div>
            </div>
            <div className="p-4 feature-info">
              <h4 className="text-xs text-gray-400 mb-1 feature-tag">Ecosystem Support</h4>
              <p className="text-sm text-white font-medium">
                Seamless integration across platforms
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
