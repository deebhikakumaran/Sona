import cn from 'classnames';

interface ArchitectureItemProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

// const ArchitectureItem = ({ icon, title, description }: ArchitectureItemProps) => (
//   <div className="self-stretch flex min-w-60 items-center gap-[30px] grow shrink my-auto rounded-2xl">
//     <div className="self-stretch flex min-h-[100px] items-stretch overflow-hidden w-[100px] my-auto rounded-3xl">
//       <img
//         src={icon}
//         alt={title}
//         className="aspect-[1] object-contain w-[100px] flex-1 shrink basis-[0%]"
//       />
//     </div>
//     <div className="self-stretch min-w-60 text-white my-auto">
//       <h3 className="text-xl font-medium leading-[1.4]">{title}</h3>
//       <p className="text-base font-normal mt-2 text-gray-400">{description}</p>
//     </div>
//   </div>
// );

const ArchitectureItem = ({ icon, title, description }: ArchitectureItemProps) => {
  return (
    <div className={cn(
      "group relative rounded-xl bg-black/20 p-6 backdrop-blur-sm border border-white/5",
      "transition-all duration-300 hover:bg-black/30 hover:border-purple-500/20",
      "hover:shadow-[0_0_30px_-5px_rgba(155,135,245,0.2)]")}
    >
      <div className="flex items-start gap-4">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium leading-[1.4]">{title}</h3>
          <p className="text-base font-normal mt-2 text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/573cc4fc5241af9400731136c191ae2e9a9595d7?placeholderIfAbsent=true",
    title: "Agent Modules",
    description: "Intelligent modules for enhanced performance",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/792878026f0cbf3947168d2b888f9c8cce4853c8?placeholderIfAbsent=true",
    title: "Sona AI Stack",
    description: "A comprehensive view of our innovative architecture",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88234e8d61439a0e052088ccc1bf14f4723becb6?placeholderIfAbsent=true",
    title: "Vaults",
    description: "Secure storage for your assets",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae2bdcf6c1d37861abc52bdb74e382e6348a05f5?placeholderIfAbsent=true",
    title: "Bridge",
    description: "Seamlessly connect to other platforms",
  },
];

export const Architecture = () => {
  return (
    <section className="relative min-h-screen w-full py-20 px-16 overflow-hidden relative border-t border-gray-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(155,135,245,0.1),transparent_50%)]" />

      <div className="relative container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">Architecture</h2>
            <p className="text-base font-normal mt-[21px]">
              Explore the deep integration of Sona's AI stack
            </p>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7daa0f344fed57d65cf18a7b3ac3038bdeff6b8b?placeholderIfAbsent=true"
            alt="Architecture"
            className="w-24 h-24 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <ArchitectureItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

