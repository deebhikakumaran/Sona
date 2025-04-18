export const CTA = () => {
  return (
    <section className="w-full overflow-hidden text-white font-semibold text-center relative border-t border-gray-800">
      <div className="flex flex-col relative min-h-[392px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5964095ca55eaeb20fee3d5e763cb5d7b502bb40?placeholderIfAbsent=true"
          alt="CTA background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative bg-[rgba(15,15,15,0.4)] flex flex-col items-center justify-center px-20 py-[99px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
          <div className="bg-blend-overlay bg-[rgba(15,15,15,0.5)] flex w-[757px] max-w-full flex-col items-center pt-[49px] pb-[26px] px-[54px] rounded-[21px] max-md:px-5">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
            Join the Sona community and revolutionize DeFi with AI
            </h2>
            <p className="mb-8">
              Invitation to be part of something big
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 h-auto text-lg rounded-lg">
              Join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const CTA = () => {
//   return (
//     <section className="relative w-full pt-15 pb-9 relative border-t border-gray-800 relative min-h-[250px]">
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5964095ca55eaeb20fee3d5e763cb5d7b502bb40?placeholderIfAbsent=true"
//         alt="CTA background"
//         className="absolute h-full w-full object-cover inset-0"
//       />
//       <div className="relative container mx-auto max-w-6xl px-6 text-center mb-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//           Join the Sona community and revolutionize DeFi with AI
//         </h2>
//         <p className="mb-8">
//           Invitation to be part of something big
//         </p>
//         <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 h-auto text-lg rounded-lg">
//           Join now
//         </button>
//       </div>
//     </section>
//   );
// };
