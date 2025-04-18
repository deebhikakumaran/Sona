import cn from 'classnames';

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/256320eeb64abe1e92a1cf5d7fb4103c709f42e2?placeholderIfAbsent=true",
    title: "Decentralized Structure",
    subtitle: "Designed for robust security",
    delay: 0,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226db7744ba0147746b2a95c486acc83dded75e3?placeholderIfAbsent=true",
    title: "Security Model",
    subtitle: "Advanced protection for your assets",
    delay: 100,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/76f49b99d78d9ecee163c749e278a338295d70e0?placeholderIfAbsent=true",
    title: "L2 Compatibility",
    subtitle: "Seamless integration with Layer 2 solutions",
    delay: 200,
  },
];

export const VaultService = () => {
  return (
    <section className="relative w-full  py-18 px-6 relative border-t border-gray-800">
      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold leading-[1.2] max-md:max-w-full">
            <span className="text-[rgba(185,107,252,1)]">Sona's</span> Vault Service
          </h2>
          <p className="text-base font-normal leading-6 mt-6 max-md:max-w-full text-gray-400">
            Developed on the Soneium chain for enhanced security, scalability,
            and ecosystem support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group flex flex-col items-center text-center",
                "animate-fade-in [animation-delay:var(--delay)]",
              )}
              style={{ "--delay": `${feature.delay}ms` } as React.CSSProperties}
            >
              <div className="relative mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="aspect-[1] object-contain w-[100px] self-center max-w-full rounded-[50px]"
                />
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

